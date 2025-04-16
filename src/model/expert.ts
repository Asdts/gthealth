import mongoose from "mongoose";

const ExpertSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    specialization: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    Verified: { type: Boolean, default: false },
    document: { type: String, required: true },
    documentType: { type: String, required: true },
    documentNumber: { type: String, required: true },
    documentVerified: { type: Boolean, default: false },
    documentVerifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    documentVerifiedAt: { type: Date },
    documentVerifiedStatus: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    documentVerifiedComment: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const Expert = mongoose.models.Expert || mongoose.model("Expert", ExpertSchema);

export default Expert;