import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/backend');
        console.log("DB CONECTADA");
    } catch (error) {
        console.log(error);
    }
};