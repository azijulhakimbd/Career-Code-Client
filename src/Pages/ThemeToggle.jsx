import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "dark"
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button className="btn" onClick={toggleTheme}>
      {theme === "light" ? <CiDark size={30} /> : <CiLight size={30} />}
    </button>
  );
};

export default ThemeToggle;
