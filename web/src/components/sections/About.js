import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text" data-aos="fade-right">
                        <div className="section-header">
                            <span className="subtitle">Our Story</span>
                            <h2>Bridging Engineering with Business Success</h2>
                            <p>Founded in 2018, Simbi Technologies and Innovations Ltd is a leading engineering and business transformation firm committed to driving global digital dominance.</p>
                        </div>
                        <div className="about-description">
                            <p>Based in Abuja, we partner with visionary enterprises, fast-growing startups, and government institutions to architect intelligent, scalable, and user-centric digital ecosystems.</p>
                            <p>Our multidisciplinary team combines strategic product thinking with technical excellence to transform complex ideas into high-impact realities—empowering businesses to compete and win on a global scale.</p>
                        </div>
                        <div className="about-cta">
                            <a href="/about" className="btn btn-primary">Our Full Story</a>
                        </div>
                    </div>
                    <div className="about-visual" data-aos="fade-left">
                        <div className="image-stack">
                            <img src="/images/our_story_tech_team.png" alt="Simbi Tech Team" className="main-img" />
                            <div className="experience-badge">
                                <span className="years">5+</span>
                                <span className="text">Years of Excellence</span>
                            </div>
                        </div>
                        <div className="floating-stats">
                            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
                                <span className="number">40+</span>
                                <span className="label">Innovations Launched</span>
                            </div>
                            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
                                <span className="number">30+</span>
                                <span className="label">Global Partners</span>
                            </div>
                            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
                                <span className="number">15+</span>
                                <span className="label">Elite Engineers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
