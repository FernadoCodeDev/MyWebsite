import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(storedMode ? storedMode === "true" : prefersDark);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <img
      src="/img/DarkMode.webp"
      alt="DarkModeIcon"
      className="w-20 h-auto cursor-pointer invert dark:invert-0 md:w-24"
      onClick={() => setDarkMode(!darkMode)}
    />
  );
};

export default DarkMode;