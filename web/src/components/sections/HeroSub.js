"use client";
import React from 'react';
import Script from 'next/script';

const HeroSub = ({ badge, title, highlight, description }) => {
    return (
        <>
            <Script 
                src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" 
                onLoad={() => {
                    if (window.particlesJS) {
                        window.particlesJS('particles-js', {
                            "particles": {
                                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                                "color": { "value": "#ffffff" },
                                "shape": { "type": "circle" },
                                "opacity": { "value": 0.3, "random": false },
                                "size": { "value": 2, "random": true },
                                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                                "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": { "onhover": { "enable": true, "mode": "grab" }, "resize": true }
                            },
                            "retina_detect": true
                        });
                    }
                }}
            />
            <section className="hero hero-subpage">
                <div id="particles-js" style={{ position: 'absolute', inset: 0 }}></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge" data-aos="fade-down">{badge}</div>
                        <h1 data-aos="fade-up" data-aos-delay="100">{title} <span className="highlighted-text">{highlight}</span></h1>
                        <p data-aos="fade-up" data-aos-delay="200">{description}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSub;
