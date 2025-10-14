import React from 'react';
import styles from './Process.module.css';

// Íconos SVG que ya tenías
const IconExplore = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>;
const IconChoose = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>;
const IconDecorate = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>;

const Process: React.FC = () => {
    return (
        <section className={styles.processSection}>
            <div className={styles.grid}>
                <div className={`${styles.artisticCard} ${styles.concreteCard}`}>
                    <div className={styles.iconWrapper}><IconExplore /></div>
                    <h3 className={styles.cardTitle}>Explorá</h3>
                    <p>Descubrí nuestras colecciones y encontrá la pieza que resuena con tu estilo.</p>
                </div>
                <div className={`${styles.artisticCard} ${styles.terrazzoCard}`}>
                    <div className={styles.iconWrapper}><IconChoose /></div>
                    <h3 className={styles.cardTitle}>Elegí</h3>
                    <p>Seleccioná tu diseño favorito y hacé tu pedido de forma segura a través de nuestra tienda online.</p>
                </div>
                <div className={`${styles.artisticCard} ${styles.concreteCard}`}>
                    <div className={styles.iconWrapper}><IconDecorate /></div>
                    <h3 className={styles.cardTitle}>Decorá</h3>
                    <p>Recibí tu pieza artesanal y dale a tu espacio un toque de diseño único que perdura en el tiempo.</p>
                </div>
            </div>
        </section>
    );
};

export default Process;