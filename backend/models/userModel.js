import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },

    },{
        timestamps:true
    }
)
const User=mongoose.model('User', UserSchema)

export default User