import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function validate() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Imię jest wymagane.";
        } else if (formData.name.length < 2) {
            newErrors.name = "Imię musi mieć co najmniej 2 znaki.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "E-mail jest wymagany.";
        } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email)) {
            newErrors.email = "Nieprawidłowy adres e-mail.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Wiadomość jest wymagana.";
        } else if (formData.message.length < 10) {
            newErrors.message = "Wiadomość musi mieć co najmniej 10 znaków.";
        }

        return newErrors;
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
        } else {
            setErrors({});
            setSubmitted(true);
            // Tutaj można np. wysłać dane do backendu
            console.log("Wysłano wiadomość:", formData);
            setFormData({ name: "", email: "", message: "" });
        }
    }

    return (
        <div className={styles.contact}>
            <h2>Formularz kontaktowy</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Imię:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className={styles.error}>{errors.email}</span>
                    )}
                </div>

                <div>
                    <label>Wiadomość:</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && (
                        <span className={styles.error}>{errors.message}</span>
                    )}
                </div>

                <button type="submit" className={styles.button}>Wyślij</button>

                {submitted && (
                    <p className={styles.success}>Wiadomość została wysłana!</p>
                )}
            </form>
        </div>
    );
}
