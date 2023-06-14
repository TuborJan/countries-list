"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChangeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={
        theme === "dark" ? () => setTheme("light") : () => setTheme("dark")
      }
    >
      <span className="">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};

export default ThemeChangeButton;
