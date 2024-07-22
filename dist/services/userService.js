"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const database_1 = require("../database");
class UserService {
    static async createUser(name, birthdate, email, hourly_rate) {
        try {
            await database_1.pool.query('INSERT INTO users (name, birthdate, email, hourly_rate) VALUES ($1, $2, $3, $4)', [name, birthdate, email, hourly_rate]);
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to create user');
        }
    }
    static async getAllUsers() {
        try {
            const result = await database_1.pool.query('SELECT * FROM users');
            return result.rows;
        }
        catch (error) {
            console.error('Failed to get all users:');
            throw new Error('Failed to get all users');
        }
    }
    static async getUserById(id) {
        try {
            const result = await database_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows[0];
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to get user by id');
        }
    }
    static async deleteUserById(id) {
        try {
            await database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
            console.log('User deleted successfully');
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to delete user by id');
        }
    }
    static async deleteAllUsers() {
        try {
            await database_1.pool.query('DELETE FROM users');
            console.log('All users deleted successfully');
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to delete all users');
        }
    }
    static async updateUserById(id, name, birthdate, email) {
        try {
            await database_1.pool.query('UPDATE users SET name = $1, birthdate = $2, email = $3 WHERE id = $4', [name, birthdate, email, id]);
            console.log('User updated successfully');
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to update user by id');
        }
    }
}
exports.UserService = UserService;
