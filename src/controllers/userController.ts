import { Request, Response } from 'express';
import { UserService } from '../services/userService';
export class UserController {
    static async createUser(req: Request, res: Response) {
        const { name, birthdate, email } = req.body;
        try {
            await UserService.createUser(name, birthdate, email);
            res.status(201).send('User created successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error creating user');
        }
    }

    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).send(users);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting users');
        }
    }

    static async getUserById(req: Request, res: Response) {
        const userId = req.params.id;
        console.log(`Received request for user ID: ${userId}`);
        try {
            const user = await UserService.getUserById(JSON.parse(userId));
            res.status(200).send(user);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting user');
        }
    }

    static async deleteUserById(req: Request, res: Response) {
        const userId = req.params.id;
        try {
            await UserService.deleteUserById(JSON.parse(userId));
            res.status(200).send('User deleted successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error deleting user');
        }
    }

    static async deleteAllUsers(req: Request, res: Response) {
        try {
            await UserService.deleteAllUsers();
            res.status(200).send('All users deleted successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error deleting all users');
        }
    }

    static async updateUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const { name, birthdate, email } = req.body;
        try {
            await UserService.updateUserById(JSON.parse(userId), name, birthdate, email);
            res.status(200).send('User updated successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error updating user');
        }
    }

    static async saveHoursWorked(req: Request, res: Response) {
        const { user_id, month, hours_worked } = req.body;
        try {
            await UserService.saveHoursWorked(user_id, month, hours_worked);
            res.status(200).send('Hours worked saved successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error saving hours worked');
        }
    }
}