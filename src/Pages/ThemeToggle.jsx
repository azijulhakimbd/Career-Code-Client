import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

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
       {theme === "light" ? <CiDark size={30} /> : <CiLight size={30} />}
    </button>
  );
};

export default ThemeToggle;
