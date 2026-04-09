import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/hero.png"
const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills & Tools", path: "/skills_tools" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-bold text-white tracking-wide"
        > 
          <span className="flex items-center gap-2 text-xl md:text-2xl flex-row font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            <img src={hero} alt="" className="h-5 w-5 object-contain" />
            Gautam Rai
          </span>
        </NavLink>

        {/* Menu */}
        <nav className="flex items-center gap-6 md:gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.name}

              {/* Active underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;