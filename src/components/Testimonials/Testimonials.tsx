import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Lo que dicen nuestros clientes</h2>
                <div className={styles.grid}>
                    <figure className={styles.testimonialCard}>
                        <blockquote className={styles.quote}>
                            “La bandeja de terrazo es el centro de atención de mi living. La calidad y el diseño son espectaculares. ¡Se nota que está hecho con amor!”
                        </blockquote>
                        <figcaption className={styles.caption}>
                            <strong>— Camila G.</strong>
                        </figcaption>
                    </figure>
                    <figure className={styles.testimonialCard}>
                        <blockquote className={styles.quote}>
                            “Compré unas macetas de concreto para la oficina y el cambio fue increíble. Le dieron un toque moderno y elegante al instante.”
                        </blockquote>
                        <figcaption className={styles.caption}>
                            <strong>— Martín R.</strong>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;