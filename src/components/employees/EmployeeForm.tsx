import { employeeService } from "../../services/employeeService";
import { useFormInput } from "../../hooks/useFormInput";

interface FormProps {
  departments: string[];
  onAddSuccess: () => void;
}

function EmployeeForm({ departments, onAddSuccess }: FormProps) {
  const first = useFormInput("");
  const last = useFormInput("");
  const dept = useFormInput(departments[0] || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use hook's method for basic input validation
    const isFirstValid = first.validate((val) =>
      val.trim() === "" ? "First Name cannot be empty" : null,
    );

    const isLastValid = last.validate((val) =>
      val.trim() === "" ? "Last Name cannot be empty" : null,
    );

    if (isFirstValid && isLastValid) {
      // Use service method for business logic attempt
      const result = employeeService.createEmployee(
        first.value,
        last.value,
        dept.value,
      );

      if (result.success) {
        first.setValue("");
        last.setValue("");
        onAddSuccess();
      } else {
        first.setError(result.error || "Failed to create employee");
      }
    }
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
            <div className="w-full max-w-md">
              <input
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                {...first.bind}
              />
              {first.error && (
                <p className="text-red-500 text-sm mt-1">{first.error}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">Last Name</label>
            <div className="w-full max-w-md">
              <input
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                {...last.bind}
              />
              {last.error && (
                <p className="text-red-500 text-sm mt-1">{last.error}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">Department</label>
            <div className="w-full max-w-md">
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                {...dept.bind}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
