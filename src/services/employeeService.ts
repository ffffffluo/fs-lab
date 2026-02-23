import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  getDepartments: () => {
    return employeeRepo.getDepartments();
  },

  createEmployee: (firstName: string, lastName: string, deptName: string) => {
    const departments = employeeRepo.getDepartments();
    const departmentExists = departments.some((d) => d.name === deptName);

    // Business Logic Validations
    if (!departmentExists) {
      return { success: false, error: "Department does not exist." };
    }

    if (firstName.length < 3) {
      return {
        success: false,
        error: "First Name must have at least three characters.",
      };
    }

    // Invoke repo method
    employeeRepo.createEmployee(firstName, lastName, deptName);
    return { success: true, error: null };
  },
};
