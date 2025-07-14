import React from "react";
import styles from "../styles/CarDetails.module.css";

export default function CarDetails({ car, details, onBack }) {
    return (
        <div className={styles.detailsContainer}>
            <button onClick={onBack} className={styles.backButton}>← Wróć</button>
            <h2>{car.model_make_id} {car.model_name}</h2>

            {details && details.length > 0 ? (
                <div className={styles.trimsGrid}>
                    {details.map((trim) => (
                        <div key={trim.model_id} className={styles.trimCard}>
                            <h3>{trim.model_year} {trim.model_trim || "Brak nazwy wersji"}</h3>
                            <p><strong>Nadwozie:</strong> {trim.model_body || "Brak danych"}</p>
                            <p><strong>Silnik:</strong> {trim.model_engine_cc}cc, {trim.model_engine_cyl} cyl.</p>
                            <p><strong>Moc:</strong> {trim.model_engine_power_ps || "?"} PS</p>
                            <p><strong>Paliwo:</strong> {trim.model_engine_fuel || "?"}</p>
                            <p><strong>Skrzynia:</strong> {trim.model_transmission_type || "?"}</p>
                            <p><strong>Napęd:</strong> {trim.model_drive || "?"}</p>
                            <p><strong>Drzwi:</strong> {trim.model_doors || "?"}, <strong>Waga:</strong> {trim.model_weight_kg || "?"} kg</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Brak danych o wersjach.</p>
            )}
        </div>
    );
}
