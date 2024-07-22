import { Request, Response } from "express";
import { hoursWorkedService } from "../services/hoursWorkedService";

export class hoursWorkedController {
    static async saveHoursWorked(req: Request, res: Response) {
        const { user_id, month_year, hours_worked } = req.body;
        try {
            await hoursWorkedService.saveHoursWorked(user_id, month_year, hours_worked);
            res.status(201).json({ message: 'Hours worked saved successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error saving hours worked');
        }
    }

    static async getWorkHoursSummary(req: Request, res: Response) {
        const { month_year } = req.params;
        try {
          const summary = await hoursWorkedService.getWorkHoursSummary(month_year);
          res.status(200).json(summary);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error getting work hours summary');
        }
      }
}