import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar'; // Esta es la flotante
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