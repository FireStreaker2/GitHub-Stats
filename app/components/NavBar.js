import Image from "next/image";
import styles from "../page.module.css";

export default function NavBar() {
  return (
    <main className={styles.navBar}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/settings">Settings</a>
    </main>
  )
}