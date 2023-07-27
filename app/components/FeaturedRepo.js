import styles from "../page.module.css";
import LanguageLogo from "./LanguageLogo";

export default async function FeaturedRepo(props) {
  const userRepo = props.userRepo;
  const response = await fetch(`https://api.github.com/repos/${userRepo}`);
  const data = await response.json();

  const name = data.name;
  const fullName = data.full_name;
  const language = data.language;
  
  return (
    <a className={`${styles.container} ${styles.featuredProfile}`} href={`/stats/${userRepo}`}>
      {response ? (
        <>
          <div>
            <LanguageLogo language={language} />
          </div>
          <div>
            <h1>{name}</h1>
            <p>{fullName}</p>
          </div>
        </>
      ) : (
        <p>Loading Repository...</p>
      )}
    </a>
  )
}