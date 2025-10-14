import React from 'react';
import Hero from '../components/Hero/Hero';
import Process from '../components/Process/Process';
import Testimonials from '../components/Testimonials/Testimonials';
import logo from '../assets/vidasiempre-logo-sinbg.png';

const Home: React.FC = () => {
    const mercadoShopsUrl = "https://tu-tienda.mercadoshops.com.ar";
    return (
        <>
            <Hero logo={logo} shopUrl={mercadoShopsUrl} />
            <Process />
            <Testimonials />
        </>
    );
};

export default Home;