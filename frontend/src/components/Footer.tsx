import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10 px-6 md:px-16 py-12">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-gray-400">
        
        {/* COLUMN 1 - ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-white font-semibold text-lg">Address</h3>
          <p className="text-sm leading-relaxed">
            Hyderabad, Telangana <br />
            India
          </p>
        </motion.div>

        {/* COLUMN 2 - SOCIALS (VERTICAL) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-white font-semibold text-lg">Connect</h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/Gautam-kr-rai"
              target="_blank"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gautam-kumar-30b459228/"
              target="_blank"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="mailto:gautam02rai@gmail.com"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </motion.div>

        {/* COLUMN 3 - INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-white font-semibold text-lg">About</h3>
          <p className="text-sm leading-relaxed">
            Building scalable, modern, and user-focused applications with clean design and efficient architecture.
          </p>
        </motion.div>

      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Gautam. Built with React, Tailwind & Framer Motion.
      </div>
    </footer>
  );
};

export default Footer;