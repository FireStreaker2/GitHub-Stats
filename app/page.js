import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/client/SearchBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <SearchBar />
      <div className={styles.container}>
        <p>Tip: To search for a user, put their username. To search for a repository, put it into the format of username/repository.</p>
      </div>
    </main>
  )
}