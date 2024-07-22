"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const hoursWorkedController_1 = require("../controllers/hoursWorkedController");
exports.router = (0, express_1.Router)();
exports.router.post('/saveHoursWorked', hoursWorkedController_1.hoursWorkedController.saveHoursWorked);
