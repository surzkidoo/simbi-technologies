"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import HeroSub from '@/components/sections/HeroSub';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
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
                badge="Connectivity"
                title="Let's Start Your"
                highlight="Digital Journey"
                description="Our multidisciplinary team is standing by to engineer your next success. Reach out today for a strategic consultation."
            />
            
            <Contact />

            {/* Map or Office Section */}
            <section className="office" style={{ padding: '100px 0', background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Headquarters</span>
                        <h2>Visit Our Innovation Hub</h2>
                    </div>
                    <div className="office-card" style={{ 
                        width: '100%', 
                        height: '450px', 
                        background: '#e2e8f0', 
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.28315185966!2d7.479532549999999!3d9.08383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4f5f8b9f1d%3A0x867375a0076a0846!2sMaitama%2C%20Abuja!5e0!3m2!1sen!2sng!4v1715181600000!5m2!1sen!2sng" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
