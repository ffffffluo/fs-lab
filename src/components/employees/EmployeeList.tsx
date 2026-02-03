import type { Employee } from "../../data/organizationData";

interface EmployeeListProps {
  employees: Employee[];
}

function EmployeeList({ employees }: EmployeeListProps) {
  if (!employees) return null;
  return (
    <ul>
      {employees.map((emp, index) => (
        <li key={index}>
          {emp.firstName} {emp.lastName}
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
