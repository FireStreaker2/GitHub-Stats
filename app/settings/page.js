import styles from "../page.module.css";
import NavBar from "../components/client/NavBar";

export const metadata = {
  title: "Settings | GitHub Stats",
}

export default function Settings() {
  return (
    <main className={styles.main}>
      <NavBar />
      <p>Settings</p>
    </main>
  )
}