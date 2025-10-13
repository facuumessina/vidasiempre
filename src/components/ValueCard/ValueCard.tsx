import React from 'react';
import styles from './ValueCard.module.css';

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, text }) => {
    return (
        <div className={styles.valueCard}>
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default ValueCard;