import React from 'react';
import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Process from './components/Process/Process';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import logo from './assets/vida-siempre-logo.jpeg';

const App: React.FC = () => {
    const mercadoShopsUrl = "https://tu-tienda.mercadoshops.com.ar"; // <-- CAMBIA ESTE LINK

    return (
        <div className={styles.app}>
            <Hero logo={logo} shopUrl={mercadoShopsUrl} />
            <Process />
            <FeaturedProducts />
            <About />
            <Footer />
        </div>
    );
};

export default App;