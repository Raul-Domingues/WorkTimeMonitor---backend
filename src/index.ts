import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/userRoutes';
// import { pool } from './database';

dotenv.config();
const app = express();
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

// app.post('/cadastro', async (req, res) => {
//   const { name, birthdate, email } = req.body;
//   await pool.query('INSERT INTO users (name, birthdate, email) VALUES ($1, $2, $3)', [name, birthdate, email]);
//   res.send('Cadastro realizado com sucesso!');
// });