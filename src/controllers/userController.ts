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
}