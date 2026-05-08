import React from 'react';

const Growth = () => {
    return (
        <section id="growth" className="growth">
            <div className="container">
                <div className="growth-grid">
                    <div className="growth-content" data-aos="fade-right">
                        <span className="subtitle">Revenue Acceleration</span>
                        <h2>Scale Without Limits</h2>
                        <p>We don't just build software; we engineer growth. Our digital ecosystems are designed to optimize conversion, automate sales cycles, and maximize your market reach.</p>
                        <div className="growth-pillars">
                            <div className="pillar">
                                <div className="pillar-icon"><i className="fas fa-chart-line"></i></div>
                                <div>
                                    <h4>Revenue Optimization</h4>
                                    <p>Implementing data-driven features that increase average order value and customer lifetime value.</p>
                                </div>
                            </div>
                            <div className="pillar">
                                <div className="pillar-icon"><i className="fas fa-rocket"></i></div>
                                <div>
                                    <h4>Market Expansion</h4>
                                    <p>Engineering scalable infrastructure that allows your business to enter new global markets seamlessly.</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className="btn btn-primary">Accelerate Your Growth</a>
                    </div>
                    <div className="growth-visual" data-aos="fade-left">
                        <div className="growth-card">
                            <img src="/images/growth_analytics.png" alt="Growth Analytics" />
                            <div className="stats-overlay">
                                <div className="mini-stat">
                                    <span className="val">240%</span>
                                    <span className="lab">Revenue Uplift</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Growth;
