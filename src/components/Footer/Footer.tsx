// src/components/Footer/Footer.tsx (Con icono de Instagram y responsive)
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import instagramLogo from '../../assets/instagram.svg'; // Importamos el logo

const FooterWave = () => (
    <div className={styles.waveContainer}>
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className={styles.waveSvg}>
            <path d="M0,15 C480,35, 960,35, 1440,15 V40 H0 Z" fill="#FDFBFA"></path>
        </svg>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className={styles.footerWrapper}>
            <FooterWave />
            <div className={styles.footerContent}>
                <div className={styles.linksContainer}>
                    <span>&copy; {new Date().getFullYear()} Vida Siempre</span>
                    <span className={`${styles.separator} ${styles.hideOnMobile}`}>•</span> {/* Añadimos la clase hideOnMobile */}
                    {/* Nuevo grupo para Términos y Condiciones e Instagram */}
                    <div className={styles.termsAndSocialGroup}>
                        <Link to="/terminos-y-condiciones" className={styles.footerLink}>
                            Términos y Condiciones
                        </Link>
                        <span className={styles.separator}>•</span>
                        <a href="https://www.instagram.com/vidasiempre.art" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                            <img src={instagramLogo} alt="Instagram" className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;