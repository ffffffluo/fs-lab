// import { useState } from "react";
// import { leadershipService } from "../services/leadershipService";
// import OfficerForm from "../components/organization/OfficerForm";

// export default function OrganizationPage() {
//   // Load initial state straight from the service
//   const [officers, setOfficers] = useState(leadershipService.getOfficers());

//   const handleAddSuccess = () => {
//     // Refresh data when a new role is successfully added
//     setOfficers(leadershipService.getOfficers());
//   };

//   return (
//     <div className="container mx-auto p-8 max-w-7xl">
//       <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-900 pb-2">
//         Leadership & Management
//       </h2>

//       <div className="bg-white shadow rounded-lg overflow-hidden">
//         {officers.map((officer, index) => (
//           <div
//             key={index}
//             className={`flex justify-between items-center p-4 ${
//               index !== officers.length - 1 ? "border-b border-gray-200" : ""
//             } hover:bg-gray-50`}
//           >
//             <span className="text-lg font-semibold text-gray-800">
//               {officer.firstName} {officer.lastName}
//             </span>
//             <span className="text-blue-700 font-medium">{officer.role}</span>
//           </div>
//         ))}
//       </div>

//       <OfficerForm onAddSuccess={handleAddSuccess} />
//     </div>
//   );
// }
