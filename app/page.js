import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <p>Hello World!</p>
    </main>
  )
}