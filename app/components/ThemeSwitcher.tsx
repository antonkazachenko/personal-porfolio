'use client';

import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from "@/public/icons";
import { useTheme } from './useTheme';
import "./styles.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className="switch"
      data-ison={isLight}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Toggle color theme"
      aria-pressed={isLight}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
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
          // Dark theme: white ball on the dark pill. Light theme: dark ball on
          // the light pill. (Matches Figma node 830:3481.)
          backgroundColor: isLight ? '#111111' : '#F5F5F5',
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
