import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 dark:bg-black/30 backdrop-blur-2xl shadow-2xl shadow-black/20 border border-white/20 dark:border-white/10"
          : "bg-transparent"
      } rounded-2xl px-6 py-3`}
    >
      <div className="flex items-center gap-8">
        {/* Logo */}
        <motion.div className="relative" whileHover={{ scale: 1.05 }}>
          <span className="font-black text-xl tracking-tight bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent">
            MKR
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-orange-400 to-transparent rounded-full" />
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                active === item
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400"
              }`}
            >
              {active === item && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-orange-500/10 dark:bg-orange-500/15 rounded-xl border border-orange-500/20"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              {item}
            </motion.a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-12 h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-lg shadow-orange-500/30 flex items-center px-1 transition-all duration-300"
        >
          <motion.div
            animate={{ x: darkMode ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center text-[8px]"
          >
            {darkMode ? "🌙" : "☀️"}
          </motion.div>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;