import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const router = Router();

router.post('/cadastro', UserController.createUser);
router.get('/getUsers', UserController.getAllUsers);
router.get('/getUserById/:id', UserController.getUserById);
router.delete('/deleteUserById/:id', UserController.deleteUserById);
router.delete('/deleteAllUsers', UserController.deleteAllUsers);
router.put('/updateUserById/:id', UserController.updateUserById);