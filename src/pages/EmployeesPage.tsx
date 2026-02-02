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
      <div className="space-y-8">
        {data.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
      </div>

      <div className="mt-12 pt-8 border-gray-200">
        <EmployeeForm
          departments={data.map((d) => d.name)}
          onAdd={addEmployee}
        />
      </div>
    </main>
  );
}
