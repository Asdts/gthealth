/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import connect from "@/helper/dbConn";
import User from "@/model/user";
import { sendVerMail } from "@/helper/mailer";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connect();

    // Parse request body
    const { email} = await req.json();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ error: "User does not exists" }, { status: 400 });
    }
    // Send verification email
    try {
      await sendVerMail({ email, emailType: "forgot", userId: existingUser._id });
    } catch (emailError:any) {
      console.error("Email sending failed:", emailError.message);
    }
    return NextResponse.json(
      { message: "Reset mail sent successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in user registration:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error, please try again later" },
      { status: 500 }
    );
  }
}