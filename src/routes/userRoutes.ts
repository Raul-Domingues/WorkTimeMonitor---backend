import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const userRouter = Router();

userRouter.post('/cadastro', UserController.createUser);
userRouter.get('/getUsers', UserController.getAllUsers);
userRouter.get('/getUserById/:id', UserController.getUserById);
userRouter.delete('/deleteUserById/:id', UserController.deleteUserById);
userRouter.delete('/deleteAllUsers', UserController.deleteAllUsers);
userRouter.put('/updateUserById/:id', UserController.updateUserById);