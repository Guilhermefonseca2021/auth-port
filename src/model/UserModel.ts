import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    permissions: [{
        type: String,
        default: "user"
    }]
});

const User = mongoose.model('user_table', UserSchema);
export default User;