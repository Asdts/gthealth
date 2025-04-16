// File: models/MedicalReport.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IMedicalReport extends Document {
  fileName: string;
  userId: Schema.Types.ObjectId;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  analysis: string;
  createdAt: Date;
}

const MedicalReportSchema: Schema = new Schema({
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  fileSize: { type: Number, required: true },
  fileUrl: { type: String, required: true },
  analysis: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.models.MedicalReport || 
  mongoose.model<IMedicalReport>("MedicalReport", MedicalReportSchema);