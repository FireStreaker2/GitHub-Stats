"use client";

import styles from "../page.module.css";
import NavBar from "../components/client/NavBar";
import { useEffect, useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("");
  const handleSetTheme = (event) => {
    setTheme(event.target.value);
    
    localStorage.setItem("theme", event.target.value);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [])

  document.documentElement.setAttribute("data-theme", theme);
  document.title = "Settings | GitHub Stats";
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={`${styles.container} ${styles.settingsContainer}`}>
        <h1 className={styles.title}>Settings</h1>
        <p>Settings for GitHub Stats.</p>
        <h2>Themes</h2>
        <select value={theme} className={styles.themes} onChange={handleSetTheme}>
          <option>Dark Mode</option>
          <option>Light Mode</option>
        </select>

        <h2>More Coming Soon...</h2>
      </div>
    </main>
  )
}