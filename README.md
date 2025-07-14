# AutoBrowser – projekt React

AutoBrowser to aplikacja webowa stworzona w React, która umożliwia przeszukiwanie modeli samochodów według marki oraz wyświetlanie szczegółów konkretnych wersji pojazdów (trims) przy użyciu API [CarQueryAPI](https://www.carqueryapi.com/). Aplikacja zawiera wyszukiwarkę, routing z kilkoma podstronami oraz formularz kontaktowy.

---

## Technologie i uzasadnienie wyboru

- **React** – wybrany jako główny framework do budowy interfejsu, ze względu na komponentową strukturę, dużą społeczność i możliwość tworzenia dynamicznych aplikacji SPA.
- **Fetch API (z JSONP)** – użyty do komunikacji z darmowym zewnętrznym API (CarQuery), co było jednym z wymagań.
- **Vite** – szybki bundler do React, który przyspiesza pracę z projektem.

---

## Live Preview

https://zarembixx.github.io/projekt/index.html

## Instalacja i uruchomienie lokalne

1. **Sklonuj repozytorium:**

git clone https://github.com/twoj-login/projekt.git
cd projekt

2. **Zainstaluj zależności:**

npm install

3. **Uruchom aplikacje lokalnie:**

npm run dev

4. **Otwórz w przeglądarce:**

Aplikacja uruchomi się pod adresem http://localhost:5173 (lub innym wskazanym w terminalu).



## Funkcje aplikacji

- Przeszukiwanie modeli samochodów po marce.
- Wyświetlanie szczegółów technicznych (trims) wybranego modelu w formie kafelków.
- Formularz kontaktowy z walidacją.
- Styl responsywny — działa na komputerze i telefonie.



