import React from "react";
import styles from "../styles/Header.module.css";

export default function Header({ currentPage, onNavigate }) {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>AutoBrowser</div>
                <nav className={styles.navLinks}>
                    <button
                        className={currentPage === "home" ? styles.activeLink : ""}
                        onClick={() => onNavigate("home")}
                    >
                        Strona główna
                    </button>
                    <button
                        className={currentPage === "about" ? styles.activeLink : ""}
                        onClick={() => onNavigate("about")}
                    >
                        O aplikacji
                    </button>
                    <button
                        className={currentPage === "contact" ? styles.activeLink : ""}
                        onClick={() => onNavigate("contact")}
                    >
                        Kontakt
                    </button>
                </nav>
            </div>
        </header>
    );
}
