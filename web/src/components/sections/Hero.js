"use client";
import React, { useEffect } from 'react';
import Script from 'next/script';

const Hero = () => {
    return (
        <>
            <Script 
                src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" 
                onLoad={() => {
                    if (window.particlesJS) {
                        window.particlesJS('particles-js', {
                            "particles": {
                                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                                "color": { "value": "#ffffff" },
                                "shape": { "type": "circle" },
                                "opacity": { "value": 0.5, "random": false },
                                "size": { "value": 3, "random": true },
                                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 } }
                            },
                            "retina_detect": true
                        });
                    }
                }}
            />
            <section id="home" className="hero hero-full">
                <div id="particles-js" style={{ position: 'absolute', inset: 0 }}></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">Next-Gen Engineering Hub</div>
                        <h1>Engineering Digital <span className="highlighted-text">Powerhouses</span></h1>
                        <p>We combine architectural precision with strategic growth thinking to engineer high-performance digital ecosystems that drive business revenue and global transformation.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">Get a Proposal</a>
                            <a href="/services" className="btn btn-secondary" style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white' }}>Explore Services</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
