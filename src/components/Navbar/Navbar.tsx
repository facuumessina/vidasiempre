import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/vida-siempre-logo.png';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.logoLink}>
                <img src={logo} alt="Vida Siempre Logo" className={styles.logo} />
            </NavLink>
            <ul className={styles.navList}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/productos" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-nosotras" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
                        Sobre Nosotras
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;