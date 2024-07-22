import { pool } from '../database';

export class UserService {
  static async createUser(name: string, birthdate: string, email: string, hourly_rate: number) {
    try {
      await pool.query('INSERT INTO users (name, birthdate, email, hourly_rate) VALUES ($1, $2, $3, $4)', [name, birthdate, email, hourly_rate]);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create user');
    }
  }

  static async getAllUsers() {
    try {
      const result = await pool.query('SELECT * FROM users');
      return result.rows;
    } catch (error) {
      console.error('Failed to get all users:');
      throw new Error('Failed to get all users');
    }
  }

  static async getUserById(id: number) {
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get user by id');
    }
  }

  static async deleteUserById(id: number) {
    try {
      await pool.query('DELETE FROM users WHERE id = $1', [id]);
      console.log('User deleted successfully');
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete user by id');
    }
  }

  static async deleteAllUsers() {
    try {
      await pool.query('DELETE FROM users');
      console.log('All users deleted successfully');
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete all users');
    }
  }

  static async updateUserById(id: number, name: string, birthdate: string, email: string, hourly_rate: number) {
    try {
      await pool.query('UPDATE users SET name = $1, birthdate = $2, email = $3, hourly_rate = $4 WHERE id = $5', [name, birthdate, email, hourly_rate, id]);
      console.log('User updated successfully');
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update user by id');
    }
  }
}
