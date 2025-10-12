// src/components/Hero/Hero.tsx (Versión actualizada)
import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
    logo: string;
    shopUrl: string;
}

const Hero: React.FC<HeroProps> = ({ logo, shopUrl }) => {
    return (
        <header className={styles.heroSection}>
            <div className={styles.contentWrapper}>
                <img src={logo} alt="Logo de Vida Siempre" className={styles.logo} />
                <h1 className={styles.title}>
                    La belleza de lo artesanal, <br /> la fuerza que perdura.
                </h1>
                <p className={styles.subtitle}>
                    Descubre nuestras piezas únicas de concreto y terrazo.
                </p>
                <a href={shopUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Ir a la Tienda
                </a>
            </div>
            <div className={styles.waveContainer}>
                {/* SVG de GetWaves.io */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#F5F1E9" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,170.7C672,160,768,192,864,192C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </header>
    );
};

export default Hero;