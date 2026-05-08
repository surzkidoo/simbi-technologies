import React from 'react';

const TrustedBy = () => {
    return (
        <section className="trusted-by">
            <div className="container">
                <p className="trusted-label">Brands we work with</p>
                <div className="logo-grid">
                    <div className="logo-scroll">
                        <img src="/images/brands/clean-logo.svg" alt="Clean" />
                        <img src="/images/brands/getsub-logo-light.png" alt="GetSub" />
                        <img src="/images/brands/TradingExcel Academy-01 1.png" alt="TradingExcel" />
                        <span className="brand-text">Capwallet</span>
                        <span className="brand-text">Sha Intelligent</span>
                        {/* Duplicated for seamless loop */}
                        <img src="/images/brands/clean-logo.svg" alt="Clean" />
                        <img src="/images/brands/getsub-logo-light.png" alt="GetSub" />
                        <span className="brand-text">Capwallet</span>
                        <img src="/images/brands/TradingExcel Academy-01 1.png" alt="TradingExcel" />
                        <span className="brand-text">Sha Intelligent</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
