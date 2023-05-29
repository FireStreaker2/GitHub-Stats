import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/navbar";

export default function Settings() {
  return (
    <main className={styles.main}>
      <NavBar />
      <p>Settings</p>
    </main>
  )
}