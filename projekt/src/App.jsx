import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styles from "./styles/App.module.css";

export default function App() {
  const [page, setPage] = useState("home");

  function renderPage() {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className={styles.app}>
      <Header currentPage={page} onNavigate={setPage} />
      <main className={styles.main}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
