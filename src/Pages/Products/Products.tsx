// src/pages/Products.tsx
import React from 'react';
import ProductCard, { Product } from '../../components/ProductCard/ProductCard.tsx';
import styles from './Products.module.css'; // Crearemos este archivo a continuación

// Aquí defines la información de tus productos
const productsData: Product[] = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1594535182358-052458145248?q=80&w=1974',
        title: 'Maceta Cilíndrica',
        description: 'Diseño minimalista en concreto pulido. Ideal para suculentas y plantas de interior de tamaño mediano.',
        tag: 'Concreto',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1621283168288-515ce94038b3?q=80&w=1974',
        title: 'Bandeja de Terrazo',
        description: 'Cada pieza es única. Perfecta como vaciabolsillos, base para velas o un toque de arte en tu mesa.',
        tag: 'Terrazo',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1587054239092-8a4a5c5354a3?q=80&w=1974',
        title: 'Porta-Incienso',
        description: 'Pequeños detalles que crean grandes atmósferas. Hecho a mano con terminación suave.',
        tag: 'Concreto',
    },
    // ...Puedes agregar más productos aquí
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