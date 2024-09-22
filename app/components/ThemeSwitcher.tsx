'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from "@/app/public/icons";
import "./styles.css";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="switch" data-ison={isDarkMode} onClick={toggleTheme}>
      {/* Moon Icon (Always Visible on the Left Side) */}
      <motion.div className="icon-container moon-icon">
        <MoonIcon className="icon" />
      </motion.div>

      {/* Toggle Circle (Handle) */}
      <motion.div
        className="handle"
        layout
        transition={spring}
        style={{
          backgroundColor: isDarkMode ? '#111111' : '#F5F5F5',
        }}
      />

      {/* Sun Icon (Always Visible on the Right Side) */}
      <motion.div className="icon-container sun-icon">
        <SunIcon className="icon" />
      </motion.div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
