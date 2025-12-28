'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { value: 50, suffix: '%', label: 'Operaties Geautomatiseerd' },
    { value: 20, suffix: '%', label: 'Kostenbesparing' },
    { value: 70, suffix: '+', label: 'Uren Bespaard/Maand' },
    { value: 2, suffix: 'x', label: 'Snellere Klant Onboarding' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

export default function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000' }}>
            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Badge */}
                <motion.div
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-8"
                >
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                            background: 'rgba(124, 58, 237, 0.1)',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            color: '#A78BFA',
                        }}
                    >
                        Casestudies
                    </span>
                </motion.div>

                <motion.div
                    ref={ref}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                        Zie hoe slimme AI-automatisering{' '}
                        <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent pr-1">
                            bedrijven transformeert
                        </span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative inline-block">
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
                                        filter: 'blur(20px)',
                                        transform: 'scale(2)',
                                    }}
                                />

                                <div
                                    className="relative text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
                                    }}
                                >
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                            </div>
                            <p className="mt-3 text-sm font-medium" style={{ color: '#9CA3AF' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
