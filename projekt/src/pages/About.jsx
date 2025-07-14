import React from "react";

export default function About() {
    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>O aplikacji AutoBrowser</h1>
            <p>
                AutoBrowser to aplikacja webowa, która pozwala użytkownikom w prosty i intuicyjny sposób wyszukiwać samochody oraz przeglądać ich szczegóły. Projekt został zbudowany z myślą o użytkowniku — działa zarówno na komputerach, jak i urządzeniach mobilnych, zapewniając wygodną i czytelną nawigację.
            </p>
            <h2>Główne funkcje:</h2>
            <ul>
                <li>Wyszukiwanie samochodów po nazwie marki</li>
                <li>Przeglądanie listy wyników z podstawowymi informacjami</li>
                <li>Intuicyjny i estetyczny interfejs użytkownika</li>
                <li>Responsywność i pełna kompatybilność z urządzeniami mobilnymi</li>
            </ul>
            <h2>Technologie:</h2>
            <p>
                AutoBrowser został zbudowany przy użyciu najnowszych technologii front-endowych:
            </p>
            <ul>
                <li><strong>React</strong> – do tworzenia komponentów i zarządzania stanem</li>
                <li><strong>Vite</strong> – do szybkiego uruchamiania projektu i bundlowania</li>
                <li><strong>CSS modules</strong> – do modularnego stylowania</li>
            </ul>
            <h2>Cel projektu:</h2>
            <p>
                Celem aplikacji jest stworzenie lekkiego, estetycznego i funkcjonalnego narzędzia do eksploracji świata motoryzacji. Projekt może być dalej rozwijany — np. o filtrowanie, zapisywanie ulubionych aut, czy integrację z bazą VIN.
            </p>
        </div>
    );
}
