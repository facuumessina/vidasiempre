import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar'; // Corregido el casing de la ruta
import Footer from '../components/Footer/Footer';
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const Root: React.FC = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default Root;