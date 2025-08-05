import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // install react-icons if not installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h1 className="navbar_logo-text">
          Graphilla <span className="navbar_logo-highlight">Tech</span>
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar_toggle" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <div className={`navbar_menu ${isOpen ? "navbar_menu--open" : ""}`}>
        <ul className="navbar_list">
          <li className="navbar_item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar_link navbar_link--active" : "navbar_link"
              }
              onClick={handleClose}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar_link navbar_link--active" : "navbar_link"
              }
              onClick={handleClose}
            >
              About
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "navbar_link navbar_link--active" : "navbar_link"
              }
              onClick={handleClose}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
