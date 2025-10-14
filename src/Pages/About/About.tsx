// src/Pages/About.tsx (Con fondo de resplandor)
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* --- ENCABEZADO CON RESPLANDOR SUTIL --- */}
            <header className={styles.pageHeader}>
                <h1 className={styles.mainTitle}>La esencia de lo artesanal</h1>
            </header>

            <div className={styles.cardsContainer}>
                {/* ... (el resto del JSX no cambia) ... */}
                <div className={`${styles.artisticCard} ${styles.terrazzoCard}`}>
                    <h2 className={styles.cardTitle}>Nuestra Misión</h2>
                    <p>
                        Transformar materiales nobles en objetos con alma. Cada pieza, nacida como un pasatiempo, busca llevar una dosis de arte duradero a los espacios cotidianos.
                    </p>
                </div>
                <div className={`${styles.artisticCard} ${styles.concreteCard}`}>
                    <h2 className={styles.cardTitle}>Nuestra Visión</h2>
                    <p>
                        Inspirados en la poesía de Spinetta, aspiramos a ser un refugio de diseño artesanal, creciendo orgánicamente mientras compartimos la pasión por crear algo que, simplemente, perdure.
                    </p>
                </div>
                <div className={`${styles.artisticCard} ${styles.concreteCard}`}>
                    <h2 className={styles.cardTitle}>Quiénes Somos</h2>
                    <p>
                        Detrás de Vida Siempre está la pasión de un hobbista por la creación manual. Un equipo pequeño dedicado a explorar la belleza de los materiales y compartir piezas únicas.
                    </p>
                </div>
                <div className={`${styles.artisticCard} ${styles.terrazzoCard}`}>
                    <h3 className={styles.cardTitle}>Hecho a Mano</h3>
                    <p>
                        Cada pieza es única y celebra la belleza de la imperfección y el valor de un objeto creado con dedicación.
                    </p>
                </div>
                <div className={`${styles.artisticCard} ${styles.terrazzoCard}`}>
                    <h3 className={styles.cardTitle}>Diseño Atemporal</h3>
                    <p>
                        Creemos en objetos que trascienden las modas por su calidad, simpleza y estilo minimalista.
                    </p>
                </div>
                <div className={`${styles.artisticCard} ${styles.concreteCard}`}>
                    <h3 className={styles.cardTitle}>Materiales Auténticos</h3>
                    <p>
                        Amamos los materiales en su estado más puro. Esa honestidad se siente en la textura y el peso de cada objeto.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;