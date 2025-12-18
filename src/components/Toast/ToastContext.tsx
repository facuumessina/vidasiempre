// src/components/Toast/ToastContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import Toast from './Toast';

interface ToastContextType {
    showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast debe ser usado dentro de un ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = (message: string) => {
        setToastMessage(message);
    };

    const handleClose = () => {
        setToastMessage(null);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toastMessage && <Toast message={toastMessage} onClose={handleClose} />}
        </ToastContext.Provider>
    );
};
