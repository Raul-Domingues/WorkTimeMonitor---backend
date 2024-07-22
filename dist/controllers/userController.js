"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../services/userService");
class UserController {
    static async createUser(req, res) {
        const { name, birthdate, email, hourly_rate } = req.body;
        try {
            await userService_1.UserService.createUser(name, birthdate, email, hourly_rate);
            res.status(201).json({ message: 'User created successfully' });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error creating user');
        }
    }
    static async getAllUsers(req, res) {
        try {
            const users = await userService_1.UserService.getAllUsers();
            res.status(200).send(users);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error getting users');
        }
    }
    static async getUserById(req, res) {
        const userId = req.params.id;
        console.log(`Received request for user ID: ${userId}`);
        try {
            const user = await userService_1.UserService.getUserById(JSON.parse(userId));
            res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error getting user');
        }
    }
    static async deleteUserById(req, res) {
        const userId = req.params.id;
        try {
            await userService_1.UserService.deleteUserById(JSON.parse(userId));
            res.status(200).send('User deleted successfully');
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error deleting user');
        }
    }
    static async deleteAllUsers(req, res) {
        try {
            await userService_1.UserService.deleteAllUsers();
            res.status(200).send('All users deleted successfully');
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error deleting all users');
        }
    }
    static async updateUserById(req, res) {
        const userId = req.params.id;
        const { name, birthdate, email } = req.body;
        try {
            await userService_1.UserService.updateUserById(JSON.parse(userId), name, birthdate, email);
            res.status(200).send('User updated successfully');
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error updating user');
        }
    }
}
exports.UserController = UserController;
