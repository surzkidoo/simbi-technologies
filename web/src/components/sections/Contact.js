import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-side-by-side">
                    {/* Left Side: Content */}
                    <div className="contact-content-side" data-aos="fade-right">
                        <span className="subtitle">Connectivity</span>
                        <h2>Let's build something extraordinary</h2>
                        <p>Ready to transform your vision into a digital reality? Our multidisciplinary team is standing by to engineer your next success.</p>

                        <div className="contact-methods">
                            <div className="method-item" data-aos="fade-up" data-aos-delay="100">
                                <div className="method-icon"><i className="fas fa-envelope"></i></div>
                                <div className="method-info">
                                    <h3>Email</h3>
                                    <p>info@simbitechnologies.com.ng</p>
                                </div>
                            </div>
                            <div className="method-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="method-icon"><i className="fas fa-phone-alt"></i></div>
                                <div className="method-info">
                                    <h3>Direct Line</h3>
                                    <p>081 5179 9286</p>
                                </div>
                            </div>
                            <div className="method-item" data-aos="fade-up" data-aos-delay="300">
                                <div className="method-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="method-info">
                                    <h3>Location</h3>
                                    <p>Maitama Extension, Abuja FCT</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-connect">
                            <p>Follow our engineering journey</p>
                            <div className="social-pills">
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-side" data-aos="fade-left">
                        <div className="form-card">
                            <form id="contactForm" action="https://formsubmit.co/abubakarsurzkidoo@gmail.com" method="POST">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Work Email</label>
                                    <input type="email" name="email" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" placeholder="Project Inquiry" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" placeholder="Tell us about your project goals..." required></textarea>
                                </div>
                                <button type="submit" className="submit-btn">
                                    <span>Send Message</span>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
