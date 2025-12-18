// src/pages/Products.tsx
import React from 'react';
import ProductCard, { Product } from '../../components/ProductCard/ProductCard.tsx';
import styles from './Products.module.css';
import macetaVintage from '../../assets/maceta-vintage.png';
import macetaPlato from '../../assets/maceta-plato.png';
import portaVela from '../../assets/porta-velas.png';

// Aquí defines la información de tus productos
const productsData: Product[] = [
    {
        // Puedes reemplazar esta URL por la foto real de tu porta-velas
        imageUrl: portaVela,
        title: 'Porta-Velas',
        description: 'Ilumina tus espacios con calidez. Diseño geométrico en concreto que resalta la luz natural de tus velas y crea una atmósfera acogedora.',
        tag: 'Concreto',
    },
    {
        // Puedes reemplazar esta URL por la foto real de tu maceta con plato
        imageUrl: macetaPlato,
        title: 'Maceta con Plato',
        description: 'Funcionalidad y estética unidas. Incluye drenaje y plato a medida para el cuidado perfecto de tus plantas, protegiendo tus superficies con estilo.',
        tag: 'Concreto',
    },
    {
        // Puedes reemplazar esta URL por la foto real de tu maceta vintage
        imageUrl: macetaVintage,
        title: 'Maceta Vintage',
        description: 'Un guiño al pasado con texturas modernas. Su relieve acanalado aporta carácter, nostalgia y un toque distintivo a cualquier rincón.',
        tag: 'Concreto',
    },
];

const Products: React.FC = () => {
    const mercadoShopsUrl = "https://tu-tienda.mercadoshops.com.ar"; // <-- CAMBIA ESTE LINK

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Nuestros Productos</h1>
                <p className={styles.pageSubtitle}>
                    Cada pieza es creada a mano, celebrando la belleza de lo imperfecto y duradero.
                </p>
            </header>

            <div className={styles.grid}>
                {productsData.map((product, index) => (
                    <ProductCard key={index} product={product} shopUrl={mercadoShopsUrl} />
                ))}
            </div>
        </div>
    );
};

export default Products;