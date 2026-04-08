import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-neutral-900 flex items-center justify-center px-6 md:px-12"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 40%),
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "auto, 40px 40px, 40px 40px",
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-cyan-400 text-sm tracking-widest uppercase">
            Hi there 👋
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gautam Rai
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            A Software Developer & Product Engineer focused on building clean, intuitive, 
            and high-performance digital products.  
            <br className="hidden md:block" />
            <span className="block mt-3 text-sm md:text-base text-gray-400">
              🎓 Computer Science & Mathematics graduate (2025) ·{" "}
              <span className="text-cyan-400">Delhi Technological University</span>
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-4">
            <a 
              href="https://drive.google.com/file/d/1T99YvAzdTfvt-KaIpxdkfarRJlakx5IW/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium 
                        hover:bg-cyan-400 hover:scale-105 
                        transition-all duration-300 
                        shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
            >
              📄 Resume
            </a>

            <a href="/contact" className="px-6 py-3 rounded-xl border border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
            className="w-64 h-80 rounded-[50%/40%] overflow-hidden border border-white/10 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src="\src\assets\home\developer.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

      </div>
    </div>
  );
}