import { Request, Response, NextFunction } from 'express';
import { createUserService } from '../services/userService';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, birthdate, email } = req.body;
        const newUser = await createUserService({ name, birthdate, email });
        res.status(201).json(newUser)
    } catch (error) {
        next(error);
    }
}