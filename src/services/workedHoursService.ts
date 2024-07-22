import { pool } from '../database';

export class WorkedHoursService {

    static async saveHoursWorked(user_id: number, month_year: string, hours_worked: number) {
        try {
          await pool.query('INSERT INTO work_hours (user_id, month_year, hours_worked) VALUES ($1, $2, $3)', [user_id, month_year, hours_worked]);
          console.log('Hours worked saved successfully');
        } catch (error) {
          console.error(error);
          throw new Error('Failed to save hours worked');
        }
    } 
}
