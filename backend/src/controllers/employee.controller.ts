import { Request, Response } from "express";
import pool from "../config/database"
import { RowDataPacket } from "mysql2";

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
    const [rows] = await pool.query<RowDataPacket[]>("SELECT emp_code , emp_fname, emp_lname , emp_phone , emp_salary ,dpm_id , role_id FROM employees WHERE emp_code = ?",
        [req.params.id]
     )
     if(rows.length === 0) {
        res.status(404).json({message: "Employee not found"})
     } else {
        res.json(rows);
     }
};
