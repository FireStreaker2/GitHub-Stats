import Image from "next/image";
import styles from "/app/page.module.css";
import NavBar from "/app/components/NavBar";

async function retrieve(user) {
  const api = `https://api.github.com/users/${user}`;
  
  const response = await fetch(api);
  
  if (!response.ok) {
    return "404";
  }
  
  const res = await response.json();
  return res;
}
  

export default async function User({ params }) {
  const user = params.user;
  const data = await retrieve(user);

  return (
    <main className={styles.main}>
      <NavBar />
      <div>{data ?
        <div className={`${styles.statsContainer} ${styles.container}`}>
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
            {/* <div className={`${styles.stats} ${styles.container}`}>
                <p>hi</p>
            </div> */}
        </div>
        : "Loading..."}
      </div>
    </main>
  )
}