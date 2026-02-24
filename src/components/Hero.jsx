import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const FloatingOrb = ({ x, y, size, color, delay }) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
    style={{ width: size, height: size, background: color, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Orbs */}
      <FloatingOrb x="10%" y="20%" size={400} color="#f97316" delay={0} />
      <FloatingOrb x="60%" y="60%" size={300} color="#fb923c" delay={2} />
      <FloatingOrb x="80%" y="10%" size={250} color="#fbbf24" delay={1} />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-orange-500/10 border border-orange-500/30 text-orange-500 backdrop-blur-sm">
            ✦ Available for Projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-4">
          <span className="block text-gray-800 dark:text-white">Hi, I'm</span>
          <span className="block relative mt-2">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Md Kaif Raza
            </span>
            {/* Underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          {["Frontend Developer", "React Enthusiast", "Aspiring MERN Dev"].map((tag, i) => (
            <span key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-orange-500" />}
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p variants={itemVariants} className="mt-6 text-gray-500 dark:text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
          Building beautiful, performant web experiences with modern technologies. Currently mastering the MERN stack.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249,115,22,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl shadow-lg shadow-orange-500/30 transition-all duration-300"
          >
            Let's Connect →
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;