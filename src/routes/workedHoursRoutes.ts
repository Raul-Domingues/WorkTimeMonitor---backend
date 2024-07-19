import { Router } from 'express';
import { WorkedHoursController } from '../controllers/workedHoursController';

export const router = Router();

router.post('/saveHoursWorked', WorkedHoursController.saveHoursWorked);