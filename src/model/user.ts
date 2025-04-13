// import { create } from "domain";
import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: {
        type: String,
        default: null
    },
    forgotPasswordTokenExpiry: {
        type: Date,
        default: null
    },
    verifyToken: {
        type: String,
        default: null
    },
    verifyTokenExpiry: {
        type: Date,
        default: null
    },
    GoogleId: {
        type: String,
        default: null
    },
    GoogleRefreshToken: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    accessToken:{
        type: String,
        default: null
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;