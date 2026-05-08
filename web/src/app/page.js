"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Ecosystem from '@/components/sections/Ecosystem';
import Growth from '@/components/sections/Growth';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Initialize scroll progress if needed, although it's in layout
    }, []);

    return (
        <main>
            <Hero />
            <TrustedBy />
            <Services />
            <Process />
            <About />
            <Ecosystem />
            <Growth />
            <Team />
            <Testimonials />
            <Contact />
        </main>
    );
}
