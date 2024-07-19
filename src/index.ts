import express from "express";
import dotenv from "dotenv";
import { router as userRoutes } from "./routes/userRoutes";
import { router as workedHoursRouter } from "./routes/workedHoursRoutes";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(workedHoursRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
