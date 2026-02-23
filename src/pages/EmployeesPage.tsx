import { useState } from "react";
import Department from "../components/employees/Department";
import EmployeeForm from "../components/employees/EmployeeForm";
import { employeeService } from "../services/employeeService";

export default function EmployeesPage() {
  const [data, setData] = useState(employeeService.getDepartments());

  const handleAddSuccess = () => {
    setData(employeeService.getDepartments());
  };

  return (
    <main className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-900 pb-2">
        Organization & Employees
      </h2>

      <div className="space-y-8">
        {data.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
      </div>

      <EmployeeForm
        departments={data.map((d) => d.name)}
        onAddSuccess={handleAddSuccess}
      />
    </main>
  );
}
