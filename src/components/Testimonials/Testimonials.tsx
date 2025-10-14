import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
    // Agregamos un tercer testimonio para que el carrusel sea más interesante
    const testimonials = [
        {
            quote: "“La bandeja de terrazo es el centro de atención de mi living. La calidad y el diseño son espectaculares. ¡Se nota que está hecho con amor!”",
            author: "— Camila G."
        },
        {
            quote: "“Compré unas macetas de concreto para la oficina y el cambio fue increíble. Le dieron un toque moderno y elegante al instante.”",
            author: "— Martín R."
        },
        {
            quote: "“El porta-incienso es una pequeña obra de arte. La textura del concreto es perfecta y llegó súper rápido. ¡Recomendadísimo!”",
            author: "— Sofía L."
        }
    ];

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Lo que dicen nuestros clientes</h2>
                <div className={styles.carouselViewport}>
                    <div className={styles.carouselTrack}>
                        {/* Duplicamos los testimonios para un efecto de loop infinito */}
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <figure className={styles.testimonialCard} key={index}>
                                <blockquote className={styles.quote}>
                                    {testimonial.quote}
                                </blockquote>
                                <figcaption className={styles.caption}>
                                    <strong>{testimonial.author}</strong>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;