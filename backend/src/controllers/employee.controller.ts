import { Request, Response } from "express";

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

export const getEmployees = (req: Request,res : Response) => {
    res.json(employees);
};
export const getEmployeesID = (req: Request,res: Response) => {
    const employee = employees.find((emp) => emp.id === Number(req.params.id));
    res.json(employee);
};
