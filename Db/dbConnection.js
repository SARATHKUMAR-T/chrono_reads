import mongoose from "mongoose";


export const dbConnection=async()=>{
try {
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }

    await mongoose.connect(process.env.MONGODB_URI,params)
    console.log("db connected successfully")
} catch (error) {
    console.log("error connecting Db")
    console.log(error)
}
}
