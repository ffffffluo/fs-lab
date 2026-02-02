import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-100 border-b-2 border-gray-200 p-4">
      <div className="flex items-center container mx-auto">
        <Link to="/">
          <img src={logo} alt="Pixell River Logo" className="h-20 w-auto" />
        </Link>
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold text-blue-900">
            Pixell River Employee Directory
          </h1>
          <p className="text-gray-600">
            Manage and view our organizational structure.
          </p>
        </div>
        <div className="w-20"></div>
      </div>
    </nav>
  );
}
