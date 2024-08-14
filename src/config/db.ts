import { connect } from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI as string)
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}