import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>AutoBrowser</div>
                <nav className={styles.navLinks}>
                    <a href="/">Strona główna</a>
                    <a href="/about">O aplikacji</a>
                    <a href="/contact">Kontakt</a>
                </nav>
            </div>
        </header>
    );
}
