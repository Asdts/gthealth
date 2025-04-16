import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: Number, required: true },
    fileUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Document = mongoose.models.Document || mongoose.model("Document", DocumentSchema);

export default Document;