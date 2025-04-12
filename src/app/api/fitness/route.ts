import { fetchGoogleFitData } from "@/helper/googleFit";
import { NextRequest , NextResponse } from "next/server";

const dataTypeMap = {
    activity: "com.google.activity.segment",
    blood_glucose: "com.google.blood_glucose",
    blood_pressure: "com.google.blood_pressure",
    body: ["com.google.weight", "com.google.height"],
    body_temperature: "com.google.body.temperature",
    heart_rate: "com.google.heart_rate.bpm",
    location: "com.google.location.sample",
    nutrition: "com.google.nutrition",
    oxygen_saturation: "com.google.oxygen_saturation",
    reproductive_health: ["com.google.menstruation", "com.google.ovulation"],
    sleep: "com.google.sleep.segment",
  };

export async function POST(req: NextRequest) {
  const { accessToken, dataType }: { accessToken: string; dataType: keyof typeof dataTypeMap } = await req.json();
  const dataTypes = dataTypeMap[dataType];
  if (!dataTypes) {
    return NextResponse.json({ error: "Invalid data type" }, { status: 400 });
  }

  try {
    const data = await fetchGoogleFitData(accessToken, dataTypes);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Google Fit data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}