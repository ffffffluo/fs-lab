import type { Department as DeptType } from "../../../server/src/data/organizationData";
import EmployeeList from "./EmployeeList";

interface DepartmentProps {
  department: DeptType;
}

function Department({ department }: DepartmentProps) {
  return (
    <section>
      <h3 className="text-xl font-bold text-blue-900 mb-4 border-b-2 border-blue-900 pb-2">
        {department.name}
      </h3>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <EmployeeList employees={department.employees} />
      </div>
    </section>
  );
}

export default Department;
