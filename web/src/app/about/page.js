"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import HeroSub from '@/components/sections/HeroSub';
import Team from '@/components/sections/Team';

export default function AboutPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    return (
        <main>
            <HeroSub 
                badge="Our Legacy"
                title="Architecting Digital"
                highlight="Excellence"
                description="Simbi Technologies and Innovations Ltd is a leading engineering and business transformation firm committed to driving global digital dominance."
            />
            
            {/* Mission Section */}
            <section className="mission" style={{ padding: '100px 0', background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Our Purpose</span>
                        <h2>Mission & Vision</h2>
                    </div>
                    <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div className="mission-card" data-aos="fade-up">
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Our Mission</h3>
                            <p>To empower businesses through innovative technology solutions that drive efficiency, growth, and sustainable success in an ever-evolving digital landscape.</p>
                        </div>
                        <div className="mission-card" data-aos="fade-up" data-aos-delay="200">
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Our Vision</h3>
                            <p>To be the global benchmark for engineering excellence, recognized for architecting digital powerhouses that redefine industries and improve human experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Team />

            {/* Core Values */}
            <section className="values" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Principles</span>
                        <h2>Our Core Values</h2>
                    </div>
                    <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <div className="value-item" data-aos="zoom-in">
                            <h4>Innovation</h4>
                            <p>Constantly pushing boundaries.</p>
                        </div>
                        <div className="value-item" data-aos="zoom-in" data-aos-delay="100">
                            <h4>Integrity</h4>
                            <p>Excellence with transparency.</p>
                        </div>
                        <div className="value-item" data-aos="zoom-in" data-aos-delay="200">
                            <h4>Precision</h4>
                            <p>Architectural accuracy in every line.</p>
                        </div>
                        <div className="value-item" data-aos="zoom-in" data-aos-delay="300">
                            <h4>Impact</h4>
                            <p>Driving real business results.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
