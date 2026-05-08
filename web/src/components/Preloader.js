"use client";
import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setHidden(true), 1000);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (hidden) return null;

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-logo">
                <img src="/images/Group 85.png" alt="Simbi Technologies" />
            </div>
        </div>
    );
};

export default Preloader;
