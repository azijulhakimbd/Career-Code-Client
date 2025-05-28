import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className="btn btn-sm "
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
       {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
