import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-header">BAR SHIROM</div>
      <div className="navbar-links">
        <Link to={"/aboutMe"}>About me</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/contact"}>Contact</Link>
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
