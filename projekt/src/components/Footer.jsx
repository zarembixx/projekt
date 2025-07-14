import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                © 2025 AutoBrowser. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}
