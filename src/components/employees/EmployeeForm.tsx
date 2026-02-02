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
    <section className="mt-10">
      <h3 className="text-xl font-bold mb-4 border-b-2 border-zinc-300 pb-1">
        Add New Employee
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <label className="w-32">First Name:</label>
          <input
            className="border px-2 py-1"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="w-32">Last Name:</label>
          <input
            className="border px-2 py-1"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="w-32">Department:</label>
          <select
            className="border px-2 py-1"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="rounded bg-zinc-200 px-3 py-1 font-semibold transition hover:bg-blue-100 hover:text-blue-700"
          type="submit"
        >
          Add Employee
        </button>
      </form>
    </section>
  );
}

export default EmployeeForm;
