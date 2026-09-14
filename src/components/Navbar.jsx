import { NavLink } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/Home" className="logo">
          RP
        </NavLink>

        <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <ul className="nav-links">
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
