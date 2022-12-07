import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mailRoutes from "./routes/mailRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);
app.use("/api/email", mailRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server has started!");
});
