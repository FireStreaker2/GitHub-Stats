import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/client/NavBar";

export default function About() {
  return (
    <main className={styles.main}>
      <NavBar />
      <p>About</p>
    </main>
  )
}