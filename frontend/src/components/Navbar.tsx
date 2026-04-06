import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          My Portfolio
        </NavLink>

        {/* Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/skills_tools"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }
          >
            Skills & Tools
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;