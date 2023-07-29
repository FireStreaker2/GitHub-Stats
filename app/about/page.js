import Link from "next/link";
import styles from "../page.module.css";
import NavBar from "../components/client/NavBar";

export const metadata = {
  title: "About | GitHub Stats",
}

export default function About() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <h1 className={styles.title}>About</h1>
        <p>GitHub Stats is a website made with Next.js by <Link href="https://firestreaker2.gq" target="_blank">FireStreaker2</Link>. It&apos;s purpose is to retrieve user and repository stats from GitHub, quickly and easily.</p>
        <p>It is licensed under the <Link href="https://github.com/FireStreaker2/GitHub-Stats/blob/main/LICENSE" target="_blank">MIT License</Link>.</p>
        <p>To see the source code of GitHub Stats, visit <Link href="https://github.com/FireStreaker2/GitHub-Stats" target="_blank">here</Link>.</p>
        <p>GitHub Stats is also hosted on <Link href="https://vercel.com" target="_blank">Vercel</Link>.</p>
      </div>
    </main>
  )
}