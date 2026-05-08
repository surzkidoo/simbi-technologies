"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import HeroSub from '@/components/sections/HeroSub';
import Services from '@/components/sections/Services';

export default function ServicesPage() {
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
                badge="Expertise"
                title="Business-Critical"
                highlight="Solutions"
                description="We combine strategic business logic with engineering excellence to deliver high-impact digital products that win markets."
            />
            
            <Services />

            {/* Detailed Services Breakdown */}
            <section className="detailed-services" style={{ padding: '100px 0', background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Operational Excellence</span>
                        <h2>Technical Deep-Dive</h2>
                    </div>
                    <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                        <div className="detail-item" data-aos="fade-right">
                            <h3>Full-Stack Web Engineering</h3>
                            <p>From complex ERP systems to high-traffic consumer platforms, we build resilient web architectures using modern frameworks like Next.js, Node.js, and robust database systems.</p>
                            <ul style={{ marginTop: '20px', listStyle: 'none' }}>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> Progressive Web Apps (PWA)</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> API-First Development</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> Scalable Cloud Infrastructure</li>
                            </ul>
                        </div>
                        <div className="detail-item" data-aos="fade-left">
                            <h3>High-Performance Mobile Strategy</h3>
                            <p>We engineer seamless native-feel experiences for iOS and Android, ensuring your brand stays in your customers' pockets with unmatched performance.</p>
                            <ul style={{ marginTop: '20px', listStyle: 'none' }}>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> Native iOS & Android Development</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> Cross-Platform Solutions</li>
                                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> App Store Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
