import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg portfolio-header px-4">

      <h4 className="me-auto portfolio-logo">Sowjanya Kandra</h4>

      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink  
            to="/" 
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}