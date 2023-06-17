import { Router } from "express";

import { createEmployeeController } from "../../controllers/Employee";

const employeeRoutes = Router();

employeeRoutes.post("/", createEmployeeController);

export { employeeRoutes };
