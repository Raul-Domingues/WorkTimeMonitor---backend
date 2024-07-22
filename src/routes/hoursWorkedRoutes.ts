import { Router } from 'express';
import { hoursWorkedController } from '../controllers/hoursWorkedController';

export const hourWorkedRouter = Router();

hourWorkedRouter.post('/saveHoursWorked', hoursWorkedController.saveHoursWorked)
hourWorkedRouter.get('/getWorkHoursSummary/:month_year', hoursWorkedController.getWorkHoursSummary)