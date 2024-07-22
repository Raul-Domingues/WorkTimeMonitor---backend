import { pool } from '../database';

export class hoursWorkedService {
    static async saveHoursWorked(user_id: number, month_year: string, hours_worked: number) {
        try {
            await pool.query('INSERT INTO work_hours (user_id, month_year, hours_worked) VALUES ($1, $2, $3)', [user_id, month_year, hours_worked]);
            console.log('Hours worked saved successfully');
        } catch (error) {
            console.error(error);
            throw new Error('Failed to save hours worked');
        }
    }

    static async getWorkHoursSummary(month_year: string) {
        try {
            const result = await pool.query(`
                SELECT w.month_year, SUM(w.hours_worked) as total_hours, SUM(w.hours_worked * u.hourly_rate) as total_earned
                FROM work_hours w
                JOIN users u ON w.user_id = u.id
                WHERE w.month_year = $1
                GROUP BY w.month_year
            `, [month_year]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch work hours summary');
        }
    }
}