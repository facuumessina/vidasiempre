import React from 'react';
import styles from './WhatsAppButton.module.css';
import whatsappIconImage from '../../assets/whatsapp-icon.png';
import { useToast } from '../Toast/ToastContext'; // Importamos el hook

const WhatsAppButton: React.FC = () => {
    const { showToast } = useToast(); // Usamos el hook

    const handleComingSoonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        showToast('¡Próximamente disponible! Estamos trabajando en ello 😊');
    };

    return (
        <a
            href="#"
            onClick={handleComingSoonClick}
            className={styles.whatsappButton}
            aria-label="Contactar por WhatsApp"
        >
            <img src={whatsappIconImage} alt="WhatsApp" className={styles.iconImage} />
        </a>
    );
};

export default WhatsAppButton;