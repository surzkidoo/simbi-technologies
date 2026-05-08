import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Core Capabilities</span>
                    <h2>Business-Critical Engineering</h2>
                    <p>We combine strategic business logic with engineering excellence to deliver high-impact digital products that win markets.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
                        <h3>Web App Development</h3>
                        <p>Building scalable, high-performance web applications with modern architectures and cutting-edge technologies.</p>
                    </div>
                    <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
                        <h3>Mobile Development</h3>
                        <p>Creating seamless native and cross-platform mobile experiences that engage users on every device.</p>
                    </div>
                    <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-icon"><i className="fas fa-robot"></i></div>
                        <h3>AI & Automation</h3>
                        <p>Leveraging artificial intelligence and workflow automation to drive efficiency and intelligent decision-making.</p>
                    </div>
                    <div className="service-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-icon"><i className="fas fa-video"></i></div>
                        <h3>Video Editing</h3>
                        <p>High-end cinematic video production and post-production services tailored for digital storytelling.</p>
                    </div>
                    <div className="service-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-icon"><i className="fas fa-bullhorn"></i></div>
                        <h3>Digital Marketing</h3>
                        <p>Strategic growth marketing, SEO, and performance-driven campaigns to elevate your brand's digital presence.</p>
                    </div>
                    <div className="service-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-icon"><i className="fas fa-pen-nib"></i></div>
                        <h3>Graphic Design</h3>
                        <p>Premium branding, visual identity, and creative design solutions that capture your brand's essence.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
