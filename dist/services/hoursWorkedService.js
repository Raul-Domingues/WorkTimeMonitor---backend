"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoursWorkedService = void 0;
const database_1 = require("../database");
class hoursWorkedService {
    static async saveHoursWorked(user_id, month_year, hours_worked) {
        try {
            await database_1.pool.query('INSERT INTO hours_hours (user_id, month_year, hours_worked) VALUES ($1, $2, $3)', [user_id, month_year, hours_worked]);
            console.log('Hours worked saved successfully');
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to save hours worked');
        }
    }
}
exports.hoursWorkedService = hoursWorkedService;
