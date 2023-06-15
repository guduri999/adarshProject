import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // userName: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // }
    user_id: {
        type: String,
        required: true
    }, name: {
        type: String,
        required: true
    }, role: {
        type: String,
        required: true
    }, mobile: {
        type: String,
        required: true
    }, username: {
        type: String,
        required: true
    }, status: {
        type: String,
        required: true
    }
})

export default userSchema;