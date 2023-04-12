import mongoose, { connect } from "mongoose";

const connectDB = async () =>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connect")
    } catch (error) {
        console.log("error to connect with db", error)
    }
}

export default connectDB;