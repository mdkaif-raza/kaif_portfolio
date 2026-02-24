import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 95, icon: "🌐", color: "from-orange-400 to-red-500" },
  { name: "CSS", level: 90, icon: "🎨", color: "from-blue-400 to-cyan-500" },
  { name: "JavaScript", level: 80, icon: "⚡", color: "from-yellow-400 to-amber-500" },
  { name: "React", level: 82, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", level: 88, icon: "💨", color: "from-teal-400 to-cyan-500" },
  { name: "Git", level: 75, icon: "🔀", color: "from-gray-500 to-gray-700" },
  { name: "Node.js", level: 45, icon: "🟢", color: "from-green-400 to-emerald-600" },
];

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-5 rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />

      <div className="relative">
        {/* Icon + Name */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-bold text-gray-800 dark:text-white text-sm">{skill.name}</span>
          </div>
          <span className={`text-xs font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
            {skill.level}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
          />
        </div>

        {/* Level Label */}
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
          {skill.level >= 80 ? "Advanced" : skill.level >= 60 ? "Intermediate" : "Learning"}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50/50 dark:bg-black/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-orange-500 rounded-full" />
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">My Toolkit</span>
            <span className="w-8 h-[2px] bg-orange-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Technologies I work with and am currently mastering on my path to becoming a full-stack developer.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-10 text-xs text-gray-400 dark:text-gray-600"
        >
          Always learning. Always building. ✦
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;