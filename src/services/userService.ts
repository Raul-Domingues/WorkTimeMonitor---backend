import { pool } from '../database';

export class UserService {
  static async createUser(name: string, birthdate: string, email: string) {
    try {
      await pool.query('INSERT INTO users (name, birthdate, email) VALUES ($1, $2, $3)', [name, birthdate, email]);
    } catch (error) {
      console.error('Failed to create user:');
      throw new Error('Failed to create user');
    }
  }
}
