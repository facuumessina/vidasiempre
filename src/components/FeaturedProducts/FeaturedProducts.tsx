import React from 'react';
import styles from './FeaturedProducts.module.css';

// Reemplaza estas con las URLs de tus propias imágenes
const imageUrl1 = 'https://images.unsplash.com/photo-1594535182358-052458145248?q=80&w=1974';
const imageUrl2 = 'https://images.unsplash.com/photo-1621283168288-515ce94038b3?q=80&w=1974';

const FeaturedProducts: React.FC = () => {
    return (
        <section className={styles.featuredSection}>
            <div className={styles.featureItem}>
                <div className={styles.imageContainer}>
                    <img src={imageUrl1} alt="Macetas de concreto artesanales" />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Diseño que respira</h2>
                    <p className={styles.text}>Nuestras macetas de concreto son más que un recipiente. Son una pieza de diseño minimalista que realza la belleza natural de tus plantas, creando un punto focal de calma y estilo en cualquier rincón.</p>
                </div>
            </div>

            <div className={`${styles.featureItem} ${styles.reversed}`}>
                <div className={styles.imageContainer}>
                    <img src={imageUrl2} alt="Bandejas decorativas de terrazo" />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Texturas únicas</h2>
                    <p className={styles.text}>El terrazo vuelve con fuerza. Cada bandeja es única, con una combinación de colores y texturas irrepetible. Perfectas como vaciabolsillos, base para velas o simplemente como un objeto de arte.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;