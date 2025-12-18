// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

import Root from './Pages/Root.tsx'; // El layout principal con NavBar y Footer
import Home from './Pages/Home.tsx';
import Products from './Pages/Products/Products.tsx';
import AboutPage from './Pages/About/About.tsx';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions.tsx';
import { ToastProvider } from './components/Toast/ToastContext.tsx'; // Importamos el ToastProvider

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: 'productos', element: <Products /> },
            { path: 'sobre-nosotros', element: <AboutPage /> },
            { path: 'terminos-y-condiciones', element: <TermsAndConditions /> },
            // Ruta comodín: si no coincide con ninguna de las anteriores, redirige al inicio
            { path: '*', element: <Navigate to="/" replace /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ToastProvider>
            <RouterProvider router={router} />
        </ToastProvider>
    </React.StrictMode>
);
