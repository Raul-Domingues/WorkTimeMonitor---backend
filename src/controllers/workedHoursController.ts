import { Request, Response } from 'express';
import { WorkedHoursService } from '../services/workedHoursService';

export class WorkedHoursController {

    static async saveHoursWorked(req: Request, res: Response) {
        const { user_id, month_year, hours_worked } = req.body;
        try {
            await WorkedHoursService.saveHoursWorked(user_id, month_year, hours_worked);
            res.status(200).send('Hours worked saved successfully');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error saving hours worked');
        }
    }
}
