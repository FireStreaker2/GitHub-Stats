import Image from "next/image";
import styles from "../page.module.css";

export default async function FeaturedProfile(props) {
  const user = props.user;
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();

  const pfp = data.avatar_url;
  const name = data.name;

  return (
    <a className={`${styles.container} ${styles.featuredProfile}`} href={`/stats/${user}`}>
      {response ? (
        <>
          <div>
            <Image src={pfp} width={64} height={64} alt={`${user}'s Profile Picture`} className={styles.pfp} />
          </div>
          <div>
            <h1>{name}</h1>
            <p>{user}</p>
          </div>
        </>
      ) : (
        <p>Loading Profile...</p>
      )}
    </a>
  )
}