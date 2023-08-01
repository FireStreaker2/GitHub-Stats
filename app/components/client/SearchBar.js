"use client";

import styles from "/app/page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
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
        <main className={`${styles.searchContainer} ${styles.container}`}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <h1>Show Stats For</h1>
                <input placeholder="Username/Repository" className={styles.search} onChange={handleChange} />
                <button className={styles.button}>SHOW STATS</button>
            </form>
        </main>
    )
}