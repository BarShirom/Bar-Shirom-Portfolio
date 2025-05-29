import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-header">BAR SHIROM</div>
      <div className="navbar-links">
        <NavLink
          to={"/aboutMe"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About me
        </NavLink>
        <NavLink
          to={"/portfolio"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portfolio
        </NavLink>
        <NavLink
          to={"/skills"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
      <div className="navbar-icons">
        <a
          href="https://github.com/BarShirom"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bar-shirom/"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
