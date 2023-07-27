"use client";

import styles from "/app/page.module.css";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query) {
            window.location.href = `/stats/${query}`;
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