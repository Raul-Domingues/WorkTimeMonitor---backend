import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/userRoutes';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
