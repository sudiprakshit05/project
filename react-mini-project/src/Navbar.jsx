import { useState } from "react";
import "./Navbar.css";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  }

  return (
    <nav className="navbar">
      <div className="logo">Nimbus</div>

      

      <button className="theme-btn" onClick={toggleDarkMode}>
        {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
      </button>
    </nav>
  );
}