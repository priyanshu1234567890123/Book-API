import mongoose from "mongoose";


const connectdb= async () => {
    try {
        const db= await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected successfully db ` )
    } catch (error) {
        console.log(`error aaya ${error}`)
    }
    
}
export default connectdb;