import React from 'react';
import styles from '../styles/CarCard.module.css';

export default function CarCard({ car, onClick }) {
    return (
        <div
            className={styles.card}
            onClick={onClick}
            tabIndex={0}
            role="button"
            onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') onClick();
            }}
        >
            <h3>{car.Make_Name} {car.Model_Name}</h3>
        </div>
    );
}
