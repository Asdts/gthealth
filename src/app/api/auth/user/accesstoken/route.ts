import connect from "@/helper/dbConn";
import User from "@/model/user";
import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getAccessTokenFromRefreshToken } from "@/helper/accessToken";

export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.json({ error: "Token not found" }, { status: 401 });
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as { id: string };
    if (!decodedToken) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    await connect();
    const user = await User.findById(decodedToken.id);
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const refresh_token = user.GoogleRefreshToken;
    if (!refresh_token) {
        return NextResponse.json({ error: "Refresh token not found" }, { status: 404 });
    }
    try {
        const accessToken = await getAccessTokenFromRefreshToken(refresh_token);
        return NextResponse.json({ accessToken }, { status: 200 });
    } catch (error) {
        console.error("Error fetching access token:", error);
        return NextResponse.json({ error: "Failed to fetch access token" }, { status: 500 });
    }
}