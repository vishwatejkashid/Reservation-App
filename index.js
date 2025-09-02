import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import roomsRoute from "./routes/room.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Conected To DB");
  } catch (error) {
    throw(error);
  }

//Use to check connection of mongodb if ip not specified its consols disconnected and if added after shows connected again
//   mongoose.connection.on("disconnected", ()=>{
//     console.log("mongoDB disconnected");
//   })

//   mongoose.connection.on("connected",()=>{
//     console.log("MongoDb connected")
//   })
};

//Middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/hotel", hotelRoute);
app.use("/rooms", roomsRoute);

  app.use((err ,req , res , next)=>{
    const status = err.status || 500 ; 
    const message = err.message ;
    return res.status(status).json({
      success : false,
      errMessage : message,
      stack : err.stack
    })
  })
app.listen(8080, () => {
  connect();
  console.log("Connect to backend.");
});

