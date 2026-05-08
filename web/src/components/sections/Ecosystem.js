import React from 'react';

const Ecosystem = () => {
    return (
        <section id="ecosystem" className="ecosystem">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Innovation Ecosystem</span>
                    <h2>Architecting the Digital Future</h2>
                    <p>We leverage a world-class technology stack to build resilient, scalable, and future-proof digital infrastructure.</p>
                </div>
                <div className="ecosystem-grid">
                    <div className="ecosystem-card" data-aos="fade-up">
                        <div className="ecosystem-icon"><i className="fas fa-layer-group"></i></div>
                        <h3>Core Engineering</h3>
                        <p>Building robust server-side architectures and high-performance web ecosystems using Next.js, Node.js, and Python.</p>
                        <div className="tech-tags">
                            <span>Next.js</span>
                            <span>Node.js</span>
                            <span>GraphQL</span>
                        </div>
                    </div>
                    <div className="ecosystem-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="ecosystem-icon"><i className="fas fa-mobile-alt"></i></div>
                        <h3>Mobile Mastery</h3>
                        <p>Engineering seamless cross-platform experiences with Flutter and React Native for iOS and Android dominance.</p>
                        <div className="tech-tags">
                            <span>Flutter</span>
                            <span>React Native</span>
                            <span>Swift</span>
                        </div>
                    </div>
                    <div className="ecosystem-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="ecosystem-icon"><i className="fas fa-cloud-upload-alt"></i></div>
                        <h3>Cloud & DevOps</h3>
                        <p>Automating deployment pipelines and managing hyperscale cloud infrastructure on AWS and Azure.</p>
                        <div className="tech-tags">
                            <span>AWS</span>
                            <span>Docker</span>
                            <span>Kubernetes</span>
                        </div>
                    </div>
                    <div className="ecosystem-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="ecosystem-icon"><i className="fas fa-brain"></i></div>
                        <h3>AI & Data</h3>
                        <p>Integrating advanced machine learning models and data analytics to drive intelligent business decisions.</p>
                        <div className="tech-tags">
                            <span>TensorFlow</span>
                            <span>Python</span>
                            <span>OpenAI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
