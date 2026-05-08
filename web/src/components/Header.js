"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsActive(!isActive);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                {/* Left: Logo */}
                <div className="header-left">
                    <div className="logo">
                        <Link href="/">
                            <img src="/images/Group 85.png" width="120" className="dark" alt="SimbiTech Logo" />
                            <img src="/images/Group 87.png" alt="SimbiTech Logo" className="white" width="120" />
                        </Link>
                    </div>
                </div>

                {/* Center: Navigation */}
                <div className="header-center">
                    <nav>
                        <ul className={`nav-links ${isActive ? 'active' : ''}`} onClick={() => setIsActive(false)}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/about#team">Team</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Right: Actions */}
                <div className="header-right">
                    <Link href="/contact" className="btn btn-primary header-cta">Get a Proposal</Link>
                    <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
