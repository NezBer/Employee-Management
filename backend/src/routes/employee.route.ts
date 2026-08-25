import { Router } from "express";
import { getEmployees } from "../controllers/employee.controller";
import { getEmployeesID } from "../controllers/employee.controller";


const router = Router();

router.get("/", getEmployees);

router.get("/:id", getEmployeesID);

export default router;