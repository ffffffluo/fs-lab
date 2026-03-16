import type { Employee } from "../../../server/src/data/organizationData";

interface EmployeeListProps {
  employees: Employee[];
}

function EmployeeList({ employees }: EmployeeListProps) {
  if (!employees || employees.length === 0) {
    return <div className="p-4 text-gray-600">No employees added yet.</div>;
  }

  return (
    <div>
      {employees.map((emp, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-4 
            ${index !== employees.length - 1 ? "border-b border-gray-200" : ""} 
            hover:bg-gray-50`}
        >
          <span className="text-lg font-semibold text-gray-800">
            {emp.firstName} {emp.lastName}
          </span>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
