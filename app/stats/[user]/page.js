import Image from "next/image";
import styles from "/app/page.module.css";
import NavBar from "/app/components/NavBar";

export default async function User({ params }) {
  const user = params.user;
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();

  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.profileContainer}>{data ?
        <div className={styles.statsContainer}>
            <div className={styles.info}>
                <img src={data.avatar_url} className={styles.avatar} />
                <h1>{data.name}</h1>
                <a href={data.html_url}>{data.login}</a>
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
                <p>{data.bio ? data.bio : ""}</p>
                <h2>Info</h2>
                <p>Company: {data.company ? data.company : "None" }</p>
                <a href={data.blog ? data.blog : ""}>{data.blog ? `Blog: ${data.blog}` : ""}</a>
                <p>Location: {data.location ? data.location : "None"}</p>
                <a href={data.email ? `mailto:${data.email}` : ""}>{data.email ? data.email : ""}</a>
                <p>Account created at: {data.created_at}</p>
            </div>

            <div className={`${styles.stats} ${styles.container}`}>
                <h1 className={styles.title}>Stats</h1>
                <p>Repositories: {data.public_repos}</p>
                <p>Gists: {data.public_gists}</p>
            </div>
        </div>
        : "Loading..."}
      </div>
    </main>
  )
}