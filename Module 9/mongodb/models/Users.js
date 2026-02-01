import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous",
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        min: 2,
    }
})

const User = mongoose.models.User || mongoose.model("User", UsersSchema)

export default User