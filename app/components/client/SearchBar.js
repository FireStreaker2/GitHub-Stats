"use client";

import styles from "/app/page.module.css";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = `/stats/${query}`;
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <main className={`${styles.searchContainer} ${styles.container}`}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <p>Show Stats For</p>
                <input placeholder="Username/Repository" className={styles.search} onChange={handleChange} />
                <button>SHOW STATS</button>
            </form>
        </main>
    )
}