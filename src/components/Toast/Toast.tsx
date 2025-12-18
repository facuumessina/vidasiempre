// src/components/Toast/Toast.tsx
import React, { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
    message: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // El toast se cierra automáticamente después de 3 segundos

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div className={styles.toast}>
            {message}
        </div>
    );
};

export default Toast;