import express from 'express';
import dotenv from 'dotenv';
import { userRouter } from './routes/userRoutes';
import { hourWorkedRouter } from './routes/hoursWorkedRoutes';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(hourWorkedRouter);
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
