import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Corregido el casing
import logo from '../../assets/vida-siempre-logo.png';
import { useToast } from '../Toast/ToastContext';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { showToast } = useToast();

    const handleComingSoonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        showToast('¡Próximamente disponible! Estamos trabajando en ello 😊');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerClasses = `${styles.header} ${styles.floating}`;

    return (
        <header className={headerClasses}>
            <nav className={styles.navbar}>
                <div className={styles.navStart}>
                    <Link to="/">
                        <img src={logo} alt="Vida Siempre Logo" className={styles.logo} />
                    </Link>
                </div>

                {/* Menú de escritorio */}
                <ul className={styles.navList}>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Inicio</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive }) => (isActive ? styles.active : '')}>Productos</NavLink></li>
                    <li><NavLink to="/sobre-nosotros" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre Nosotros</NavLink></li>
                </ul>
                <div className={styles.navEnd}>
                    <a href="#" onClick={handleComingSoonClick} className={styles.ctaButton}>
                        Tienda
                    </a>
                </div>

                {/* Botón de hamburguesa para móviles */}
                <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Abrir menú">
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul className={styles.mobileNavList}>
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} onClick={toggleMenu}>Inicio</NavLink></li>
                            <li><NavLink to="/productos" className={({ isActive }) => (isActive ? styles.active : '')} onClick={toggleMenu}>Productos</NavLink></li>
                            <li><NavLink to="/sobre-nosotros" className={({ isActive }) => (isActive ? styles.active : '')} onClick={toggleMenu}>Sobre Nosotros</NavLink></li>
                        </ul>
                        <a href="#" onClick={handleComingSoonClick} className={styles.mobileCtaButton}>
                            Tienda
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;