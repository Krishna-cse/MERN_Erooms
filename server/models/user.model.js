import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type:String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocJ75Czr0SS8wxBHalD73NmHbRUxz37UE7l0l6z5FR__rg=s96-c"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
