import { Request, Response } from "express";
import pool from "../config/database"

interface Employee {
    id: number;
    name: string;
    position: string;

}

let employees : Employee[] = [
    {
        id : 1,
        name : "Punyawee",
        position : "Dev"
    },
    {
        id : 2,
        name: "Walailak",
        position: "Nurse"
    },
    {
        id : 3,
        name: "Somchai",
        position:"HR"
    }
];



export const getEmployees = async (req:Request, res: Response) => {
    const [rows] = await pool.query ("SELECT emp_code , emp_fname, emp_lname , emp_phone , emp_salary ,dpm_id , role_id FROM employees");
    res.json(rows)
};
export const getEmployeesID = async (req: Request,res: Response) => {
    const [rows] = await pool.query("SELECT emp_code , emp_fname, emp_lname , emp_phone , emp_salary ,dpm_id , role_id FROM employees WHERE emp_code = ?",
        [req.params.id]
     )
     res.json(rows);
};
