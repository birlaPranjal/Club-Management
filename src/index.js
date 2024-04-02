import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import mongoose from "mongoose"
import app from './app.js'

const DB_NAME = "cards"

const connectDB = async ()=>{
    try {
        const connectionIntance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`Mongo Connnect !!!!`);
    } catch (error) {
        console.log("Mongo not connect !!",error);
        process.exit(1)
    }
    
}

connectDB()
.then(()=>{
    app.listen(port ,()=>{
        console.log(`Server is lintening on port : ${8181}`);

    })
})
.catch((error)=>{
    console.error("Mongoose contion failed",error)
})


