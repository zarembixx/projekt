import React from "react";
import styles from "../styles/CarList.module.css";

export default function CarList({ cars, onSelectCar }) {
    if (cars.length === 0) {
        return <p>Brak wyników.</p>;
    }

    return (
        <div className={styles.list}>
            {cars.map((car) => (
                <div
                    key={`${car.make_display}-${car.model_name}`}
                    className={styles.card}
                    onClick={() => onSelectCar(car)}
                    tabIndex={0}
                    role="button"
                >
                    <h3>Model: {car.model_name}</h3>
                </div>
            ))}
        </div>
    );
}
