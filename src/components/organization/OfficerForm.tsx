import { useFormInput } from "../../hooks/useFormInput";
import { leadershipService } from "../../services/leadershipService";

interface FormProps {
  onAddSuccess: () => void;
}

export default function OfficerForm({ onAddSuccess }: FormProps) {
  const first = useFormInput("");
  const last = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic required checks
    const isFirstValid = first.validate((val) =>
      val.trim() === "" ? "Required" : null,
    );
    const isLastValid = last.validate((val) =>
      val.trim() === "" ? "Required" : null,
    );
    const isRoleValid = role.validate((val) =>
      val.trim() === "" ? "Required" : null,
    );

    if (isFirstValid && isLastValid && isRoleValid) {
      // Pass to service to evaluate business rules
      const result = leadershipService.createOfficer(
        first.value,
        last.value,
        role.value,
      );

      if (result.success) {
        first.setValue("");
        last.setValue("");
        role.setValue("");
        onAddSuccess();
      } else {
        // Direct the service error to the correct input hook
        if (result.target === "role") role.setError(result.error || "");
        if (result.target === "first") first.setError(result.error || "");
      }
    }
  };

  return (
    <section className="mt-10">
      <h3 className="text-xl font-bold text-blue-900 mb-4 border-b-2 border-blue-900 pb-2">
        Add New Role
      </h3>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">First Name</label>
            <div className="w-full max-w-md">
              <input
                className="w-full border border-gray-300 rounded px-3 py-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2"
                {...last.bind}
              />
              {last.error && (
                <p className="text-red-500 text-sm mt-1">{last.error}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 font-medium text-gray-800">Role</label>
            <div className="w-full max-w-md">
              <input
                className="w-full border border-gray-300 rounded px-3 py-2"
                {...role.bind}
              />
              {role.error && (
                <p className="text-red-500 text-sm mt-1">{role.error}</p>
              )}
            </div>
          </div>

          <button
            className="rounded bg-zinc-200 px-4 py-2 font-semibold transition hover:bg-blue-100 hover:text-blue-700"
            type="submit"
          >
            Create Role
          </button>
        </form>
      </div>
    </section>
  );
}
