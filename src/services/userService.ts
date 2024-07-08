import pool from '../database';

interface User {
  name: string;
  birthdate: string;
  email: string;
}

export const createUserService = async ({ name, birthdate, email }: User) => {
  const client = await pool.connect();
  try {
    const query = 'INSERT INTO users (name, birthdate, email) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, birthdate, email];
    const result = await client.query(query, values);
    return result.rows[0];
  } finally {
    client.release();
  }
};
