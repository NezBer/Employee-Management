import { Router } from "express";
import { getEmployees } from "../controllers/employee.controller";
import { getEmployeesID } from "../controllers/employee.controller";
import { addEmployee } from "../controllers/employee.controller";
import { updateEmployee } from "../controllers/employee.controller";


const router = Router();

router.get("/emp", getEmployees);

router.get("/selectEMP/:id", getEmployeesID);

router.post("/addEMP", addEmployee);

router.put("/updateEMP/:id", updateEmployee)

export default router;