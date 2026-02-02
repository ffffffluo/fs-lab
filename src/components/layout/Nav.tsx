import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <header className="bg-slate-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Corp Directory Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold tracking-tight">Corp Directory</h1>
        </div>
        <nav className="flex gap-6">
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-sky-400 ${isActive ? "text-sky-400" : "text-slate-200"}`
            }
          >
            Employees
          </NavLink>
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-sky-400 ${isActive ? "text-sky-400" : "text-slate-200"}`
            }
          >
            Organization
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
