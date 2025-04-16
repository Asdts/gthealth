/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import connect from '@/helper/dbConn';
import MedicalReport from '@/model/medicalReport';
import { extractTextFromFile } from '@/lib/utils';
import fs from 'fs/promises';
import jwt from 'jsonwebtoken'; // Don't forget to install this

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    // 1. Extract token from cookies
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized: Token missing' }, { status: 401 });
    }

    // 2. Verify JWT token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as { id: string };
    } catch (err) {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    // 3. Connect to DB
    await connect();

    // 4. Handle form data
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${uuidv4()}-${file.name}`;
    const directory = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(directory, { recursive: true });
    const filePath = path.join(directory, fileName);

    try {
      await writeFile(filePath, buffer);
    } catch (error) {
      console.error('Error saving file:', error);
      return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
    }

    // 5. Extract report text
    const reportText = await extractTextFromFile(file);

    // 6. Analyze with Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    You are a medical report analyzer. Please analyze the following medical report and provide:

    1. A summary of the key findings in simple language
    2. Explanation of any medical terms used
    3. Actionable insights or recommendations based on the findings
    4. Any concerning results that might need immediate attention

    Format your response in HTML with appropriate headings, paragraphs, and lists for readability.

    Here is the medical report:
    ${reportText}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = response.text();

    const fileUrl = `/uploads/${fileName}`;
    const newReport = new MedicalReport({
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      fileUrl,
      analysis,
      userId: decodedToken.id,
    });

    await newReport.save();

    return NextResponse.json({ analysis });

  } catch (error) {
    console.error('Error in analyze-report API:', error);
    return NextResponse.json({ error: 'Failed to analyze report' }, { status: 500 });
  }
}
