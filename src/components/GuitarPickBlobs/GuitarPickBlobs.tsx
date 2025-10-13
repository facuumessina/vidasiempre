// src/components/GuitarPickBlobs/GuitarPickBlobs.tsx
import React from 'react';

interface GuitarPickBlobsProps {
    className?: string;
}

const GuitarPickBlobs: React.FC<GuitarPickBlobsProps> = ({ className }) => {
    return (
        <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g opacity="0.3" filter="url(#blur1)">
                <path d="M267.5 131.5C214.3 118.5 220.5 51 262.5 21C304.5 -9 375.5 8.5 397 48C418.5 87.5 397 141.5 348 155.5C299 169.5 267.5 168.5 267.5 131.5Z" fill="#C56E55"/>
            </g>
            <g opacity="0.3" filter="url(#blur2)">
                <path d="M541.5 119.5C578.3 103.5 592 51 547 22C502 -7 448 8.5 423.5 48C399 87.5 421 149 472.5 161.5C524 174 541.5 168.5 541.5 119.5Z" fill="#4F2A2A"/>
            </g>
            <defs>
                <filter id="blur1" x="150" y="-50" width="350" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur"/>
                </filter>
                <filter id="blur2" x="350" y="-50" width="350" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur"/>
                </filter>
            </defs>
        </svg>
    );
};

export default GuitarPickBlobs;