import React from 'react';
import styles from './ProductCard.module.css';

// Definimos la estructura de datos para cada producto
export interface Product {
    imageUrl: string;
    title: string;
    description: string;
    tag: string;
}

interface ProductCardProps {
    product: Product;
    shopUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, shopUrl }) => {
    return (
        <article className={styles.productCard}>
            {/* Media: Contenedor de la imagen */}
            <div className={styles.productMedia}>
                <img src={product.imageUrl} alt={product.title} />
            </div>

            {/* Body: Título y descripción */}
            <div className={styles.cardBody}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.foot}>
                    <span className={styles.tag}>{product.tag}</span>
                </div>
            </div>

            {/* CTA: Botón que lleva a la tienda */}
            <div className={styles.cardCta}>
                <a href={shopUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    Ver en la tienda
                </a>
            </div>
        </article>
    );
};

export default ProductCard;