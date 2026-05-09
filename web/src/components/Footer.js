"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setEmail('');
                setMessage('Thank you for subscribing!');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Failed to connect to the server.');
        }
    };

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Branding Column */}
                    <div className="footer-brand">
                        <img src="/images/Group 85.png" alt="Simbi Technologies" className="footer-logo" />
                        <p className="brand-description">Engineering digital powerhouses. We bridge world-class technical excellence with strategic business growth to architect the future of commerce and industry.</p>
                        <div className="footer-social">
                            <a href="#" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://www.linkedin.com/company/simbitechnologies" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://instagram.com/simbitechnologies" title="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/simbitechnologies" title="Twitter"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    {/* Expertise Hub */}
                    <div className="footer-nav">
                        <h3>Solutions</h3>
                        <ul>
                            <li><a href="#">E-commerce Engines</a></li>
                            <li><a href="#">FinTech Ecosystems</a></li>
                            <li><a href="#">Enterprise Portals</a></li>
                            <li><a href="#">Custom CRM/ERP</a></li>
                            <li><a href="#">Business Automation</a></li>
                        </ul>
                    </div>

                    {/* Engineering Ecosystem */}
                    <div className="footer-nav">
                        <h3>Technology</h3>
                        <ul>
                            <li><Link href="/services">Cloud Architecture</Link></li>
                            <li><Link href="/services">Mobile Engineering</Link></li>
                            <li><Link href="/services">AI & Data Science</Link></li>
                            <li><Link href="/services">Cybersecurity</Link></li>
                            <li><Link href="/services">Full-Stack Web</Link></li>
                        </ul>
                    </div>

                    {/* Growth Accelerator */}
                    <div className="footer-newsletter">
                        <h3>Growth Insights</h3>
                        <p>Subscribe to our strategic innovation report and scale your business with technology.</p>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Business Email" 
                                required 
                                disabled={status === 'loading'}
                            />
                            <button type="submit" className={status === 'loading' ? 'loading' : ''} disabled={status === 'loading'}>
                                {status === 'loading' ? (
                                    <span className="spinner"></span>
                                ) : (
                                    <>Join <i className="fas fa-arrow-right"></i></>
                                )}
                            </button>
                        </form>
                        {message && (
                            <div className={`form-response ${status}`} data-aos="fade-up">
                                <i className={`fas ${status === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                                <span>{message}</span>
                            </div>
                        )}
                        <div className="footer-cta-link" style={{ marginTop: '20px' }}>
                            <Link href="/contact" style={{ color: 'var(--primary-color)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>Work with us <i className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; 2025 Simbi Technologies. All rights reserved.</p>
                    </div>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
