// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './Pages/Root.tsx'; // El layout principal con NavBar y Footer
import Home from './Pages/Home.tsx';
import Products from './Pages/Products/Products.tsx';
import AboutPage from './Pages/About/About.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: 'productos', element: <Products /> },
            { path: 'sobre-nosotras', element: <AboutPage /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);