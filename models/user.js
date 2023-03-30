import mongoose from "../config/mongoose.js";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        rquired: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    }
});

const User = mongoose.model("User", userSchema);

export default User;