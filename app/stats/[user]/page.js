import Image from "next/image";
import Link from "next/link";
import styles from "/app/page.module.css";
import NavBar from "/app/components/client/NavBar";
import Organization from "@/app/components/Organization";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const user = params.user;

  return {
    title: `${user} | GitHub Stats`,
  }
}

export default async function User({ params }) {
  const user = params.user;

  const response = await fetch(`https://api.github.com/users/${user}`);

  if (!response.ok) {
    redirect("/404");
  }

  const data = !response.ok ? "N/A" : await response.json();

  const orgs = await fetch(data.organizations_url);
  const orgsData = !orgs ? "N/A" : await orgs.json();

  const repos = await fetch (data.repos_url);
  const reposData = !repos ? "N/A" : await repos.json();

  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.profileContainer}>{data ?
        <div className={styles.statsContainer}>
          <div className={styles.info}>
            <Image src={data.avatar_url} width={260} height={260} alt={`${user}'s Profile Picture`} className={styles.avatar} />
            <h1>{data.name}</h1>
            <Link href={data.html_url}>{data.login}</Link>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p className={styles.description}>{data.bio ? data.bio : ""}</p>
            <h2>Info</h2>
            <p>Company: {data.company ? data.company : "None" }</p>
            <Link href={data.blog ? data.blog : ""}>{data.blog ? `Blog: ${data.blog}` : ""}</Link>
            <p>Location: {data.location ? data.location : "None"}</p>
            <Link href={data.email ? `mailto:${data.email}` : ""}>{data.email ? data.email : ""}</Link>
            <p>Account created at: {data.created_at.split("T")[0]}</p>
          </div>

          <div className={`${styles.stats} ${styles.container}`}>
            <h1 className={styles.title}>Stats</h1>
            <p>Repository Count: {data.public_repos}</p>
            <p>Gists: {data.public_gists}</p>
            <div>Organizations:
              {orgsData.length !== 0 ? (
              <div className={styles.organizations}>
                {orgsData.map((item) => (
                  <Organization key={orgsData.indexOf(item)} avatar={item.avatar_url} login={item.login} />
                ))}
              </div>
              ) : (
                " None"
              )}
            </div>
            <div>Repositories:
              {data.public_repos === 0 ? (
                "None"
              ) : (
                <div className={styles.repositories}>
                  {reposData.map((item, index) => (
                    <>
                      <Link key={reposData.indexOf(item)} href={`/stats/${item.full_name}`}>{item.name}</Link>
                      {index !== reposData.length - 1 && ", "}
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        : "Loading..."}
      </div>
    </main>
  )
}