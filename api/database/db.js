
import mongoose from "mongoose";


export const connectDB = async () => {

    await mongoose.connect(
        `mongodb+srv://basil:48XqpGaYtxQyxS3K@cluster0.2ufivfp.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("MongoDB connected");

}
