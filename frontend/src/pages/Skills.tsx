import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    tech: ["C++", "C", "JavaScript", "TypeScript", "Java", "Python"],
    description:
      "I primarily use C++ and C for Data Structures & Algorithms, focusing on problem-solving and performance. For development, JavaScript and TypeScript are my go-to languages for building scalable applications.",
  },
  {
    title: "Frontend Development",
    tech: ["React.js", "Framer Motion", "Zustand", "Context API", "Tailwind CSS", "Angular"],
    description:
      "I build modern, responsive user interfaces using React.js and Tailwind CSS. I focus on clean UI/UX and use Framer Motion to add smooth animations and interactions.",
  },
  {
    title: "Backend Development",
    tech: ["Node.js", "Express.js", "Spring Boot"],
    description:
      "I develop scalable backend systems using Node.js and Express.js. I also have experience with Spring Boot for building robust and enterprise-level applications.",
  },
  {
    title: "Tools",
    tech: ["Postman", "GitHub", "Jira", "VS Code", "IntelliJ IDEA"],
    description:
      "I use GitHub for version control, Postman for API testing, and Jira for managing tasks. My workflow mainly revolves around VS Code and IntelliJ IDEA.",
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      
      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-2xl font-bold mb-16 text-center"
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <div className="max-w-4xl space-y-12">
        
        {skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="border-b border-white/10 pb-8"
          >
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
              {item.title}
            </h3>

            {/* Tech Row */}
            <div className="flex flex-wrap gap-3 mb-4">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Skills;