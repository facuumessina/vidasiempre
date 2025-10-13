import React from 'react';
import styles from './WhatsAppButton.module.css';
// 1. Importamos la imagen PNG desde la carpeta de assets
import whatsappIconImage from '../../assets/whatsapp-icon.png';

const WhatsAppButton: React.FC = () => {
    // --- CONFIGURACIÓN ---
    const phoneNumber = '5491112345678'; // Reemplaza con tu número
    const message = 'Hola, me gustaría comunicarme con ustedes.';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            className={styles.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            {/* 2. Usamos una etiqueta <img> con la imagen importada */}
            <img src={whatsappIconImage} alt="WhatsApp" className={styles.iconImage} />
        </a>
    );
};

export default WhatsAppButton;