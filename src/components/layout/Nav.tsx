import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <div className="container">
        <h1>Corp Directory</h1>
        <nav className="nav">
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Employees
          </NavLink>
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Organization
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
