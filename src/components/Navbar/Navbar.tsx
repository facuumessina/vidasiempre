import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo-navbar.png';

const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Usamos un pequeño umbral de 10px para que la animación no se dispare por un mínimo scroll
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Aplicamos las clases al contenedor principal <header>
    const headerClasses = `${styles.header} ${isScrolled ? styles.floating : styles.embedded}`;

    return (
        <header className={headerClasses}>
            <nav className={styles.navbar}>
                {/* Columna Izquierda: Logo */}
                <div className={styles.navStart}>
                    <Link to="/" className={styles.logoLink}>
                        <img src={logo} alt="Vida Siempre Logo" className={styles.logo} />
                    </Link>
                </div>

                {/* Columna Central: Links de Navegación */}
                <ul className={styles.navList}>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Inicio</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive }) => (isActive ? styles.active : '')}>Productos</NavLink></li>
                    <li><NavLink to="/sobre-nosotras" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre Nosotras</NavLink></li>
                </ul>

                {/* Columna Derecha: Botón */}
                <div className={styles.navEnd}>
                    <a href="https://tu-tienda.mercadoshops.com.ar" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        Tienda
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;