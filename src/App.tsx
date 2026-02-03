import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import EmployeesPage from "./pages/EmployeesPage";
import OrganizationPage from "./pages/OrganizationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/employees" replace />,
      },
      {
        path: "employees",
        element: <EmployeesPage />,
      },
      {
        path: "organization",
        element: <OrganizationPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
