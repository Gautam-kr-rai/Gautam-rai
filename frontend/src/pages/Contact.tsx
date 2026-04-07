import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //  No backend yet → show error toast
    toast.error("Feature not implemented yet. Please use Email Me option.");

    // Optional: clear form
    setForm({ name: "", email: "", message: "" });
   };


  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-2xl font-bold mb-16 text-center"
      >
        Get In <span className="text-cyan-400">Touch</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            Let’s build something amazing 
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Feel free to reach out if you want to collaborate, have a question,
            or just want to connect. I'm always open to discussing new ideas and opportunities.
          </p>

          {/* Email */}
          <a
            href="mailto:gautam02rai@gmail.com"
            className="inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Email Me
          </a>

          {/* Optional Socials */}
          <div className="flex gap-4 pt-4 text-gray-400">
            <span className="hover:text-cyan-400 cursor-pointer">GitHub</span>
            <span className="hover:text-cyan-400 cursor-pointer">LinkedIn</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-cyan-400 outline-none transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-cyan-400 outline-none transition"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-cyan-400 outline-none transition resize-none"
            required
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </div>
  );
};

export default Contact;