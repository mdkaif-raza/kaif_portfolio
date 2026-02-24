import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "7+" },
  { label: "Commits", value: "200+" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto"
      >
        {/* Section Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-orange-500 rounded-full" />
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white mb-6">
              Crafting Digital
              <span className="block bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-4">
              I'm a passionate frontend developer currently studying at university, obsessed with turning ideas into pixel-perfect, interactive web experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-8">
              My journey started with HTML & CSS curiosity, and now I'm deep into React, Tailwind, and the MERN ecosystem — building real-world apps that solve real problems.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-shadow"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-orange-500/40 transition-all"
              >
                See Projects
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Stats + Card */}
          <div className="space-y-6">
            {/* Profile card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-3xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-orange-500/30">
                  MK
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Md Kaif Raza</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to work
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["React", "Tailwind", "JS"].map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-lg">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="p-4 rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl text-center shadow-lg"
                >
                  <p className="text-2xl font-black bg-gradient-to-br from-orange-400 to-amber-600 bg-clip-text text-transparent">{s.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;