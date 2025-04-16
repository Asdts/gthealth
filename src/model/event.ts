import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    link: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    communityId: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;