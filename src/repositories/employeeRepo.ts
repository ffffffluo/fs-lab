import type { Department } from "../types/types";

const API_URL = "http://localhost:3000/api/employees";

export const employeeRepo = {
  // These are now async because they have to wait for the network
  getDepartments: async (): Promise<Department[]> => {
    const response = await fetch(API_URL);
    return response.json();
  },

  createEmployee: async (
    firstName: string,
    lastName: string,
    deptName: string,
  ) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, deptName }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.error };
    }
    return { success: true };
  },
};
