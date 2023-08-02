import Link from "next/link";
import styles from "/app/page.module.css";
import NavBar from "/app/components/client/NavBar";
import LanguageLogo from "/app/components/LanguageLogo";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const user = params.user;
  const repo = params.repository;

  return {
    title: `${user}/${repo} | GitHub Stats`,
  }
}

export default async function Repository({ params }) {
  const user = params.user;
  const repository = params.repository;

  const response = await fetch(`https://api.github.com/repos/${user}/${repository}`);

  if (!response.ok) {
    redirect("/404");
  }

  const data = !response.ok ? "N/A" : await response.json();

  const languages = await fetch(data.languages_url);
  const languagesData = !languages.ok ? "N/A" : await languages.json();
    
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.profileContainer}>
        {data ? (
          <div className={styles.statsContainer}>
            <div className={styles.info}>
              <LanguageLogo language={data.language} className={styles.repositoryLanguage} />
              <h1>{data.name}</h1>
              <Link href={data.html_url}>{data.full_name}</Link>
              <p>{data.description}</p>
              <p>{data.homepage ? `Homepage: ${data.homepage}` : ""}</p>
              <h2>Info</h2>
              {data.license && data.license.url ? (
                <Link href={data.license.url}>License: {data.license.name}</Link>
              ) : (
                <p>License: Other</p>
              )}
              <p>Created: {data.created_at}</p>
            </div>

            <div className={`${styles.stats} ${styles.container}`}>
              <h1 className={styles.title}>Stats</h1>
              <p>Languages Used: {Object.keys(languagesData).map((key) => key).join(", ")}</p>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M2350 4469 c-422 -49 -868 -250 -1275 -576 -153 -123 -481 -450 -616 -614 -116 -141 -274 -356 -332 -451 -94 -156 -101 -350 -17 -507 65 -121 305 -437 473 -622 572 -631 1176 -985 1787 -1049 500 -52 1030 109 1520 460 299 215 635 548 897 890 100 132 204 282 232 337 35 70 54 169 48 253 -10 140 -38 198 -207 432 -155 213 -291 371 -499 579 -312 310 -551 489 -866 645 -384 190 -773 266 -1145 223z m502 -499 c495 -104 1012 -469 1473 -1040 120 -148 265 -351 265 -370 0 -19 -146 -223 -265 -370 -466 -575 -974 -933 -1479 -1042 -148 -32 -427 -31 -575 1 -545 119 -1091 525 -1582 1176 -99 131 -159 221 -159 237 0 18 151 227 265 368 495 613 1052 986 1580 1059 109 15 364 5 477 -19z"/><path d="M2410 3185 c-232 -53 -427 -241 -485 -470 -8 -32 -15 -102 -15 -155 0 -183 56 -318 184 -446 45 -44 104 -93 131 -108 331 -183 733 -58 895 279 47 99 62 162 62 268 1 184 -63 338 -194 467 -144 142 -381 210 -578 165z"/></g></svg>
                <p>Watchers: {data.watchers_count}</p>
              </div>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p>Stars: {data.stargazers_count}</p>
              </div>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M256,369.8v28.4c15.7,0,28.4,12.8,28.4,28.4c0,15.7-12.8,28.4-28.4,28.4c-15.7,0-28.4-12.8-28.4-28.4 c0-15.7,12.8-28.4,28.4-28.4V369.8v-28.4c-47.1,0-85.3,38.2-85.3,85.3c0,47.1,38.2,85.3,85.3,85.3c47.1,0,85.3-38.2,85.3-85.3 c0-47.1-38.2-85.3-85.3-85.3V369.8z"/><path d="M113.8,28.4v28.4c15.7,0,28.4,12.8,28.4,28.4c0,15.7-12.8,28.4-28.4,28.4c-15.7,0-28.4-12.8-28.4-28.4 c0-15.7,12.8-28.4,28.4-28.4V28.4V0C66.6,0,28.5,38.2,28.4,85.3c0,47.1,38.2,85.3,85.3,85.3c47.1,0,85.3-38.2,85.3-85.3 c0-47.1-38.2-85.3-85.3-85.3V28.4z"/><path d="M398.2,28.4v28.4c15.7,0,28.4,12.8,28.4,28.4c0,15.7-12.8,28.4-28.4,28.4c-15.7,0-28.4-12.8-28.4-28.4 c0-15.7,12.8-28.4,28.4-28.4V28.4V0c-47.1,0-85.3,38.2-85.3,85.3c0,47.1,38.2,85.3,85.3,85.3c47.1,0,85.3-38.2,85.3-85.3 c0-47.1-38.2-85.3-85.3-85.3V28.4z"/><path d="M85.3,142.2v56.9c0,47.1,38.2,85.3,85.3,85.3h170.7c47.1,0,85.3-38.2,85.3-85.3v-56.9c0-15.7-12.7-28.4-28.4-28.4 s-28.4,12.7-28.4,28.4v56.9c0,15.7-12.8,28.4-28.4,28.4H170.7c-15.7,0-28.4-12.8-28.4-28.4l0-56.9c0-15.7-12.7-28.4-28.4-28.4 S85.3,126.5,85.3,142.2z"/><path d="M227.6,256v113.8c0,15.7,12.7,28.4,28.4,28.4c15.7,0,28.4-12.7,28.4-28.4V256c0-15.7-12.7-28.4-28.4-28.4 C240.3,227.6,227.6,240.3,227.6,256"/></g></svg>
                <p>Forks: {data.forks}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  )
}