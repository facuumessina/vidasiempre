import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <section className={styles.aboutSection}>
            <h2 className={styles.title}>Nuestra Filosofía</h2>
            <p className={styles.text}>
                En Vida Siempre, creemos en la belleza imperfecta y duradera. Cada una de nuestras piezas es diseñada y creada a mano, combinando la robustez del concreto con la elegancia única del terrazo. Buscamos transformar espacios, aportando un toque de diseño artesanal que perdure en el tiempo.
            </p>
        </section>
    );
};

export default About;