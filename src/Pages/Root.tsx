// src/pages/Root.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar.tsx';
import Footer from '../components/Footer/Footer.tsx'; // Reutilizamos el Footer
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton.tsx";

const Root: React.FC = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet /> {/* Aquí se renderizará el contenido de cada página */}
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default Root;