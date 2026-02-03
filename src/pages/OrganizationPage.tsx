import { leadershipData } from "../data/leadershipData";

export default function OrganizationPage() {
  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-900 pb-2">
        Leadership & Management
      </h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {leadershipData.map((officer, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 ${
              index !== leadershipData.length - 1
                ? "border-b border-gray-200"
                : ""
            } hover:bg-gray-50`}
          >
            <span className="text-lg font-semibold text-gray-800">
              {officer.firstName} {officer.lastName}
            </span>
            <span className="text-blue-700 font-medium">{officer.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
