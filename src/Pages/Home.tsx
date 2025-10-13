// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Process from '../components/Process/Process';
import Testimonials from '../components/Testimonials/Testimonials'; // <-- Importa el nuevo componente
import logo from '../assets/vidasiempre-logo-sinbg.png';

const Home: React.FC = () => {
    const mercadoShopsUrl = "https://tu-tienda.mercadoshops.com.ar"; // <-- CAMBIA ESTE LINK
    return (
        <>
            <Hero logo={logo} shopUrl={mercadoShopsUrl} />
            <Process />
            <Testimonials /> {/* <-- Añade la nueva sección aquí */}
        </>
    );
};

export default Home;