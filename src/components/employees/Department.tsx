import type { Department as DeptType } from "../data/organizationData";
import EmployeeList from "./EmployeeList";

interface DepartmentProps {
  department: DeptType;
}

function Department({ department }: DepartmentProps) {
  return (
    <section>
      <h2>{department.name}</h2>
      <EmployeeList employees={department.employees} />
    </section>
  );
}

export default Department;
