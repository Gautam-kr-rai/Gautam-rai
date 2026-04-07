import { motion } from "framer-motion";

const experiences = [
  {
    company: "Loyalty Juggernaut India Pvt. Ltd.",
    location: "Financial District, Hyderabad",
    role: "Product Engineer",
    duration: "Sept 2025 – Present",
    points: [
      "Independently delivered critical frontend modules including Award Catalog, Tier Management, Member Services Revamp, audit logs, and Co-branded Card Revamp using Angular.",
      "Collaborated with Backend, QA, UX, and Product teams to ensure smooth feature releases and resolve defects.",
      "Provided production support, resolving 15+ issues and ensuring stable releases.",
      "Developed unit tests with 90%+ coverage, improving reliability and maintainability.",
    ],
  },
  {
    company: "Loyalty Juggernaut India Pvt. Ltd.",
    location: "Hyderabad",
    role: "Product Engineer Intern",
    duration: "June 2025 – Sept 2025",
    points: [
      "Contributed to Releases 2.11.0 and 2.12.1 by resolving 80+ UI and functional defects.",
      "Built production-grade frontend components using Angular.",
      "Worked with GitHub, Jira, CircleCI (CI/CD), and Snyk for development workflow.",
    ],
  },
  {
    company: "DRDO",
    location: "New Delhi",
    role: "Software Development Intern",
    duration: "June 2024 – Aug 2024",
    points: [
      "Led development of a real-time chatbot using the MERN stack.",
      "Implemented seamless frontend-backend integration for dynamic query handling.",
      "Improved user engagement by 40% through optimized interaction design.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-2xl font-bold mb-16 text-center"
      >
        My <span className="text-cyan-400">Experience</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        
        {/* Timeline line */}
        <div className="absolute left-2.5 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500/40 to-transparent"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-12 mb-12"
          >
            {/* Dot */}
            <div className="absolute left-0 top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/40"></div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              
              {/* Role + Duration */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>
              </div>

              {/* Company */}
              <p className="text-gray-300 mb-4">
                {exp.company} • {exp.location}
              </p>

              {/* Points */}
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;