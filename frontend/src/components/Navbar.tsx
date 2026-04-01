import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections: string[] = ["home", "about", "projects", "contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);

  const handleScroll = (section: string): void => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center  justify-between px-6 py-4">
          
          {/* Logo */}
          <h1 className="text-black font-bold text-xl">
            Gautam
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-10 relative">
              {sections.map((item) => (
                <div key={item} className="relative">
                  <button
                    onClick={() => handleScroll(item)}
                    className="text-black uppercase tracking-wide hover:text-blue-400 transition"
                  >
                    {item}
                  </button>

                  {/* Animated underline */}
                  {active === item && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-64 h-full bg-slate-900 z-50 p-6 flex flex-col gap-6"
          >
            {/* Close Button */}
            <button
              className="text-white text-2xl self-end"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {sections.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll(item)}
                className={`text-left text-lg uppercase transition ${
                  active === item ? "text-blue-400" : "text-white"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;