import { motion } from "framer-motion";

const projects = [
  {
    title: "Employee Attendance Management System",
    description:
      "Developed a role-based full-stack attendance system with Admin, Subadmin, and Employee roles. Implemented real-time attendance tracking, reporting dashboards, and export features (PDF/XLSX) using React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Zustand", "JWT"],
    image: "/src/assets/projects/EAMS.png",
    link: "https://dpoverseas.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with product listings, shopping cart functionality, and secure payment processing.",
    tech:["React", "Node.js", "Express", "MongoDB", "Zustand", "JWT"],
    image: "/src/assets/projects/Ecom.png", 
    link: "https://e-commerce-logz.onrender.com/",
  },
  {
    title: "Hotel Management System (Backend)",
    description:
      "A microservices-based backend system built with Spring Boot to manage hotel data and ratings. Designed with modular services, RESTful APIs, and scalable architecture for efficient data handling and future extensibility.",
    tech: ["Java","Spring Boot", "Microservices", "MySQL", "REST APIs", "JPA"],
    image: "/src/assets/projects/blank.png", 
    link: "https://github.com/Gautam-kr-rai/HotelManagement", 
  },
  {
    title: "PDF Summarizer",
    description:
      "A PDF reader application that uses machine learning for document summarization and intelligent information retrieval.",
    tech: ["Python", "ML"],
    image: "/src/assets/projects/PdfSum.png",
    link: "http://live-docs-umber.vercel.app/",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Developed a chatbot utilizing the GenMini Large Language Model (LLM) to deliver accurate, responsive conversational experiences. Implemented advanced natural language processing techniques for dynamic and context-aware interactions.",
    tech: ["LLM", "NLP", "Python"],
    image: "/src/assets/projects/Ai-bot.png",
    link: "https://huggingface.co/spaces/gautamkr/chatbot",
  },
  {
    title: "Chatbot (MERN)",
    description:
      "A chatbot built with the MERN stack to improve user engagement and provide real-time support.",
    tech: ["MongoDB", "socket.io","Express", "React", "Node"],
    image: "/src/assets/projects/chat-bot.png",
    link: "/courses/chat-bot.png",
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-2xl font-bold mb-16 text-center"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ duration: 0.4 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              
              <h3 className="text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-3 text-cyan-400 text-sm hover:underline"
              >
                View Project →
              </a>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Projects;