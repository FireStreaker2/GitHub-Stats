import styles from "./page.module.css";
import NavBar from "./components/client/NavBar";
import SearchBar from "./components/client/SearchBar";
import FeaturedProfile from "./components/FeaturedProfile";
import FeaturedRepo from "./components/FeaturedRepo";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.home}`}>
      <NavBar />
      <SearchBar />
      <div className={`${styles.container} ${styles.tip}`}>
        <p>Tip: To search for a user, put their username. To search for a repository, put it into the format of username/repository.</p>
      </div>

      <div className={styles.featuredProfiles}>
        <FeaturedProfile user="FireStreaker2" />
        <FeaturedProfile user="vercel" />
        <FeaturedProfile user="torvalds" />
        <FeaturedRepo userRepo="FireStreaker2/GitHub-Stats" />
        <FeaturedRepo userRepo="vercel/next.js" />
        <FeaturedRepo userRepo="torvalds/linux" />
      </div>
    </main>
  )
}