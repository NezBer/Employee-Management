import { Router } from "express";
import { getEmployees } from "../controllers/employee.controller";


const router = Router();

router.get("/", getEmployees);

export default router;