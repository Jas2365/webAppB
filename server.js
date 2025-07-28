import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2365;

// middleware
app.use(cors());
app.use(express.json());

// connet to mongodb

// testing api
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on https://localhost:${PORT}`);
});
