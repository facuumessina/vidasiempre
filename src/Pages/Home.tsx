import React from 'react';
import Hero from '../components/Hero/Hero';
import Process from '../components/Process/Process';
import Testimonials from '../components/Testimonials/Testimonials';
import logo from '../assets/vidasiempre-logo-sinbg.png';

const Home: React.FC = () => {
    return (
        <>
            <Hero logo={logo} />
            <Process />
            <Testimonials />
        </>
    );
};

export default Home;