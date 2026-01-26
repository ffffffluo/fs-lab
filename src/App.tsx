import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import EmployeeForm from "./components/EmployeeForm";
import { organizationData as initialData } from "./data/organizationData";

function App() {
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
    <div>
      <Header />
      <main>
        {data.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
        <EmployeeForm
          departments={data.map((d) => d.name)}
          onAdd={addEmployee}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
