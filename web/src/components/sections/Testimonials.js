"use client";
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const testimonials = [
        {
            text: "Simbi Technologies transformed our subscription engine into a high-performance system. Their architectural depth and engineering precision are truly unparalleled in the industry.",
            name: "Sarah Johnson",
            role: "CEO, GetSub",
            image: "/images/sarah_johnson_avatar.png"
        },
        {
            text: "Working with their team on our AI project was a game-changer. Their innovative approach to neural networks helped us stay significantly ahead of our global competition.",
            name: "Michael Samuel",
            role: "CIO, FinanceHub",
            image: "/images/michael_samuel_avatar.png"
        },
        {
            text: "World-class engineering at its best. They didn't just build a mobile app; they architected a scalable digital ecosystem that has redefined our customer engagement.",
            name: "Amina Yusuf",
            role: "Founder, Sha Intelligent",
            image: "/images/amina_yusuf_avatar.png"
        }
    ];

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isHovered, testimonials.length]);

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header center">
                    <span className="subtitle">Wall of Trust</span>
                    <h2>Client Success Stories</h2>
                    <p>Collaborating with global innovators to build the future of technology.</p>
                </div>
                <div 
                    className="testimonial-slider"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}>
                            <div className="testimonial-content">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="client-meta">
                                    <img src={testimonial.image} alt={testimonial.name} className="client-avatar" />
                                    <div className="client-details">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testimonial-nav">
                    <button className="nav-btn prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <span 
                                key={index} 
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="nav-btn next" onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
