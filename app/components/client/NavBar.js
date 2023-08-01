"use client";

import Link from "next/link";
import styles from "../../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      router.push(`/stats/${query}`);
    }
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <main className={styles.navBar}>
      <Link href="/" className={styles.logo}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M270 504 c-69 -58 -132 -112 -140 -122 -8 -9 -4 -7 10 4 14 12 80 67 148 123 67 55 119 101 115 101 -4 -1 -64 -48 -133 -106z"/>
            <path d="M430 345 l0 -195 -37 0 -38 0 3 135 3 135 -35 0 -36 0 0 -135 0 -135 -35 0 -35 0 0 80 0 80 -30 0 -29 0 -3 -77 -3 -78 -32 -3 c-33 -3 -33 -4 -33 -58 l0 -54 233 2 232 3 3 53 3 52 -43 0 -43 0 3 195 3 195 -26 0 -25 0 0 -195z"/>
          </g>
        </svg>
        <p>GitHub Stats</p>
      </Link>
      <form className={styles.navBarForm} onSubmit={handleSubmit}>
        <input placeholder="Username/Repository" className={styles.navBarSearch} onChange={handleChange} />
        <button type="submit" className={styles.navBarButton}>
          <svg viewBox="0 0 24 24" className={styles.searchSVG}>
            <title>search</title>
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
          </svg>
        </button>
      </form>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </main>
  )
}