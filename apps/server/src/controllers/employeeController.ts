import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const employeeController = {
  getDepartments: (req: Request, res: Response) => {
    const data = employeeService.getDepartments();
    res.json(data);
  },

  createEmployee: (req: Request, res: Response) => {
    const { firstName, lastName, deptName } = req.body;

    const result = employeeService.createEmployee(
      firstName,
      lastName,
      deptName,
    );

    if (result.success) {
      res.status(201).json({ message: "Employee created" });
    } else {
      res.status(400).json({ error: result.error });
    }
  },
};
