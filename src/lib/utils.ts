// File: lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Helper to extract text from PDF or image files
import { GoogleGenerativeAI } from "@google/generative-ai"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function extractTextFromFile(file: File): Promise<string> {
  // Convert the file to base64 for Gemini input
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = buffer.toString("base64");

  const mimeType = file.type || "application/octet-stream";

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Please extract the complete readable and relevant text content from the uploaded medical report document.`,
            },
            {
              inlineData: {
                mimeType,
                data: base64,
              },
            },
          ],
        },
      ],
    });

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Failed to extract text from file using Gemini:", error);
    return "";
  }
}
