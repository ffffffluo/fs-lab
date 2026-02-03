import { useState } from "react";
import Department from "../components/employees/Department";
import EmployeeForm from "../components/employees/EmployeeForm";
import { organizationData as initialData } from "../data/organizationData";

export default function HomePage() {
  const [data, setData] = useState(initialData);

  const addEmployee = (
    firstName: string,
    lastName: string,
    deptName: string,
  ) => {
    const updatedData = data.map((dept) => {
      if (dept.name === deptName) {
        return {
          ...dept,
          employees: [...dept.employees, { firstName, lastName }],
        };
      }
      return dept;
    });
    setData(updatedData);
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

      <EmployeeForm departments={data.map((d) => d.name)} onAdd={addEmployee} />
    </main>
  );
}
