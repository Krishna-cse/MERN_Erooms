import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
