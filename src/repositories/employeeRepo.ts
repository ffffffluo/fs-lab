import { organizationData, type Department } from "../data/organizationData";

// Store data temporarily
let tempOrgData: Department[] = [...organizationData];

export const employeeRepo = {
  getDepartments: (): Department[] => {
    return tempOrgData;
  },

  createEmployee: (firstName: string, lastName: string, deptName: string) => {
    tempOrgData = tempOrgData.map((dept) => {
      if (dept.name === deptName) {
        return {
          ...dept,
          employees: [...dept.employees, { firstName, lastName }],
        };
      }
      return dept;
    });
    return tempOrgData;
  },
};
