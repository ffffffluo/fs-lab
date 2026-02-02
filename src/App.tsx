import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/EmployeesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps everything in Nav/Footer
    children: [
      {
        index: true, // This is the default page for "/"
        element: <HomePage />,
      },
      // Future pages (e.g. /about) would go here
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
