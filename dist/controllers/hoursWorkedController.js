"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoursWorkedController = void 0;
const hoursWorkedService_1 = require("../services/hoursWorkedService");
class hoursWorkedController {
    static async saveHoursWorked(req, res) {
        const { user_id, month_year, hours_worked } = req.body;
        console.log(user_id, month_year, hours_worked);
        try {
            await hoursWorkedService_1.hoursWorkedService.saveHoursWorked(user_id, month_year, hours_worked);
            res.status(201).json({ message: 'Hours worked saved successfully' });
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error saving hours worked');
        }
    }
}
exports.hoursWorkedController = hoursWorkedController;
