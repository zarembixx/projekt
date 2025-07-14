import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CarList from "../components/CarList";
import CarDetails from "../components/CarDetails";
import styles from "../styles/App.module.css";
import { fetchModelsForMake, fetchCarDetails } from "../carqueryApi";

export default function App() {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [carDetails, setCarDetails] = useState(null);

    async function handleSearch(makeInput) {
        setError(null);
        setSelectedCar(null);
        setCarDetails(null);
        if (!makeInput.trim()) {
            setError("Podaj nazwę marki!");
            return;
        }
        setLoading(true);
        try {
            const data = await fetchModelsForMake(makeInput.trim());
            if (data.length === 0) {
                setError("Brak wyników dla podanej marki");
            }
            setCars(data);
        } catch (e) {
            setError("Błąd pobierania danych z API");
        } finally {
            setLoading(false);
        }
    }

    async function handleSelectCar(car) {
        console.log("Wybrany samochód:", car);
        setSelectedCar(car);
        setCarDetails(null);

        const make = car.model_make_id ? car.model_make_id.toLowerCase() : "";
        const model = car.model_name || "";

        if (!make || !model) {
            setCarDetails(null);
            return;
        }

        try {
            const details = await fetchCarDetails(make, model);
            setCarDetails(details);
        } catch {
            setCarDetails(null);
        }
    }


    function handleBack() {
        setSelectedCar(null);
        setCarDetails(null);
    }

    return (
        <div className="home-container">
            <main className={styles.main}>
                {!selectedCar && (
                    <>
                        <SearchBar onSearch={handleSearch} />
                        {error && <p className={styles.error}>{error}</p>}
                        {loading ? (
                            <p>Ładowanie...</p>
                        ) : (
                            <CarList cars={cars} onSelectCar={handleSelectCar} />
                        )}
                    </>
                )}
                {selectedCar && (
                    <CarDetails
                        car={selectedCar}
                        details={carDetails}
                        onBack={handleBack}
                    />
                )}
            </main>
        </div>
    );
}
