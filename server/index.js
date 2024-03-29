import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js'

dotenv.config();

const password = "Terminal@2002";
const encodedPassword = encodeURIComponent(password);
mongoose.connect(`mongodb+srv://itskrishnacse:${encodedPassword}@mern-erooms.iek2olz.mongodb.net/mern-erooms`)
   .then(() => {
      console.log("Connected to the database");
   })
   .catch((err) => {
      console.error("Error connecting to the database:", err);
     
   });

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/user",userRouter)
app.use("/api/auth", authRouter )
app.use("/api/listing",listingRouter)

//middleware
app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   return res.status(statusCode).json({
     success: false,
     statusCode,
     message,
   });
 });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
