import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    owners: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    rules: [{ type: String }],
    tags: [{ type: String }],
    isPublic: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },

});

const Community = mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;