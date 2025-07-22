import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(input);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input
                type="text"
                placeholder="Wpisz markę samochodu"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={styles.button}>Szukaj</button>
        </form>

    );
}
