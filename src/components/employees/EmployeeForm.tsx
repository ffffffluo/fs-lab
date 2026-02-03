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

    if (!first) {
      setError("First Name cannot be empty");
      return;
    }

    if (!last) {
      setError("Last Name cannot be empty");
      return;
    }

    onAdd(first, last, dept);
    setFirst("");
    setLast("");
  };

  return (
    <section className="mt-10">
      <h3 className="text-xl font-bold text-blue-900 mb-4 border-b-2 border-blue-900 pb-2">
        Add New Employee
      </h3>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">First Name</label>
            <input
              className="w-full max-w-md border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">Last Name</label>
            <input
              className="w-full max-w-md border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">Department</label>
            <select
              className="w-full max-w-md border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
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

          {error && <p className="text-red-500 font-medium">{error}</p>}

          <button
            className="rounded bg-zinc-200 px-4 py-2 font-semibold transition hover:bg-blue-100 hover:text-blue-700"
            type="submit"
          >
            Add Employee
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmployeeForm;
