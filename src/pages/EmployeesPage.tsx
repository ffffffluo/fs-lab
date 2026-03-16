import { useState, useEffect } from "react";
import DepartmentComponent from "../components/employees/Department";
import EmployeeForm from "../components/employees/EmployeeForm";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/types";

export default function EmployeesPage() {
  const [data, setData] = useState<Department[]>([]);

  // Create a helper to load data from the network
  const loadData = async () => {
    const freshData = await employeeService.getDepartments();
    setData(freshData);
  };

  // Run once when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  const handleAddSuccess = () => {
    loadData(); // Re-fetch from the server when a new employee is added
  };

  return (
    <main className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-900 pb-2">
        Organization & Employees
      </h2>

      <div className="space-y-8">
        {data.map((dept, index) => (
          <DepartmentComponent key={index} department={dept} />
        ))}
      </div>

      <EmployeeForm
        departments={data.map((d) => d.name)}
        onAddSuccess={handleAddSuccess}
      />
    </main>
  );
}
