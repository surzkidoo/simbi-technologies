"use client";
import React, { useEffect } from 'react';

const Process = () => {
    useEffect(() => {
        const handleScroll = () => {
            const processSection = document.querySelector('.process');
            const processGrid = document.getElementById('processGrid');
            
            if (processSection && processGrid) {
                const sectionTop = processSection.offsetTop;
                const sectionHeight = processSection.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                
                if (scrollY >= sectionTop && scrollY <= (sectionTop + sectionHeight - windowHeight)) {
                    const scrolledDistance = scrollY - sectionTop;
                    const scrollPercent = scrolledDistance / (sectionHeight - windowHeight);
                    const maxTranslate = processGrid.scrollWidth - window.innerWidth;
                    
                    processGrid.style.transform = `translateX(-${scrollPercent * (maxTranslate + (window.innerWidth * 0.1))}px)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="process" className="process">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Operational Excellence</span>
                    <h2>Our Engineering Process</h2>
                    <p>A precision-driven methodology engineered to transform complex challenges into world-class digital products.</p>
                </div>
            </div>
            <div className="process-horizontal-wrapper">
                <div className="process-grid" id="processGrid">
                    <div className="process-item" data-aos="fade-up" data-aos-delay="100">
                        <div className="process-number">01</div>
                        <h3>Strategic Discovery</h3>
                        <p>We deep-dive into your business ecosystem to align technical requirements with your long-term growth objectives.</p>
                    </div>
                    <div className="process-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="process-number">02</div>
                        <h3>Technical Architecture</h3>
                        <p>Engineering scalable, secure, and high-performance system designs that serve as the foundation for your digital future.</p>
                    </div>
                    <div className="process-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="process-number">03</div>
                        <h3>Agile Development</h3>
                        <p>Iterative, sprint-based engineering focused on clean code, rigorous testing, and continuous value delivery.</p>
                    </div>
                    <div className="process-item" data-aos="fade-up" data-aos-delay="400">
                        <div className="process-number">04</div>
                        <h3>Strategic Launch</h3>
                        <p>Coordinated deployment followed by intelligent monitoring and data-driven scaling to ensure market success.</p>
                    </div>
                    <div className="process-spacer"></div>
                </div>
            </div>
        </section>
    );
};

export default Process;
