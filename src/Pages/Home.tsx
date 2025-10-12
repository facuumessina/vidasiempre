import React from 'react';
import Hero from '../components/Hero/Hero';
import Process from '../components/Process/Process';
import logo from '../assets/vida-siempre-logo.jpeg';

const Home: React.FC = () => {
    const mercadoShopsUrl = "https://tu-tienda.mercadoshops.com.ar"; // <-- CAMBIA ESTE LINK
    return (
        <>
            <Hero logo={logo} shopUrl={mercadoShopsUrl} />
            <Process />
        </>
    );
};

export default Home;