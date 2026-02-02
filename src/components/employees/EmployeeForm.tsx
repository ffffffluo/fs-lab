import { useState } from "react";

interface FormProps {
  departments: string[];
  onAdd: (first: string, last: string, dept: string) => void;
}

function EmployeeForm({ departments, onAdd }: FormProps) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [dept, setDept] = useState(departments[0]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (first.length <= 0) {
      setError("First Name cannot be empty");
      return;
    }

    if (last.length <= 0) {
      setError("Last Name cannot be empty");
      return;
    }

    onAdd(first, last, dept);
    setFirst("");
    setLast("");
  };

  return (
    <section style={{ marginTop: "40px", borderTop: "2px solid #ccc" }}>
      <h3>Add New Employee</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input value={first} onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div>
          <label>Last Name: </label>
          <input value={last} onChange={(e) => setLast(e.target.value)} />
        </div>
        <div>
          <label>Department: </label>
          <select value={dept} onChange={(e) => setDept(e.target.value)}>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}

export default EmployeeForm;
