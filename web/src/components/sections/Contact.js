"use client";
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch("https://formsubmit.co/ajax/abubakarsurzkidoo@gmail.com", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setResponseMsg("Message sent! We'll get back to you shortly.");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setResponseMsg("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus('error');
            setResponseMsg("Connection error. Please check your internet.");
        }
    };

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
                                <a href="https://www.linkedin.com/company/simbitechnologies"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://instagram.com/simbitechnologies"><i className="fab fa-instagram"></i></a>
                                <a href="https://twitter.com/simbitechnologies"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-side" data-aos="fade-left">
                        <div className="form-card">
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required disabled={status === 'loading'} />
                                </div>
                                <div className="form-group">
                                    <label>Work Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required disabled={status === 'loading'} />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required disabled={status === 'loading'} />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project goals..." required disabled={status === 'loading'}></textarea>
                                </div>
                                <button type="submit" className={`submit-btn ${status === 'loading' ? 'loading' : ''}`} disabled={status === 'loading'}>
                                    {status === 'loading' ? (
                                        <span className="spinner"></span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <i className="fas fa-paper-plane"></i>
                                        </>
                                    )}
                                </button>

                                {responseMsg && (
                                    <div className={`form-feedback ${status}`} data-aos="zoom-in">
                                        <i className={`fas ${status === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                                        {responseMsg}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
