'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Generate random stars
const generateStars = () => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 3,
}));

// The exact Framer animation - per word, blur to clear with slide up
const wordVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
};

const heroItemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
};

const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<Array<{ id: number, x: number, y: number, size: number, opacity: number, delay: number }>>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setStars(generateStars());
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const nebulaY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    // Exact text from goflowstate.framer.website
    const titleLine1 = "Intelligente automatisering.";
    const titleLine2 = "Optimale flow.";
    const subtitle = "Flowstate brengt AI-automatisering binnen handbereik en stroomlijnt taken.";

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#000' }}
        >
            {/* Starfield Background */}
            <div className="absolute inset-0 z-0">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{
                            opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
                        }}
                        transition={{
                            duration: 2 + star.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Nebula Glow Effect */}
            <motion.div
                className="absolute z-0 pointer-events-none"
                style={{ y: nebulaY }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: '1200px',
                        height: '800px',
                        background: 'radial-gradient(ellipse at center, rgba(132, 110, 247, 0.25) 0%, rgba(132, 110, 247, 0.1) 40%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: '800px',
                        height: '600px',
                        background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.15) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                    }}
                />
            </motion.div>

            {/* Dark vignette edges */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-20 container mx-auto px-6 text-center max-w-5xl"
                style={{ y: contentY }}
                variants={heroContainerVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
            >
                <div className="flex flex-col items-center">
                    {/* Badge */}
                    <motion.div
                        variants={heroItemVariants}
                        className="inline-flex items-center rounded-full mb-8 overflow-hidden"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            background: 'rgba(255, 255, 255, 0.03)',
                        }}
                    >
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-purple-600">New</span>
                        <span className="px-3 py-1 text-xs font-medium text-gray-400">Rankpilot</span>
                    </motion.div>

                    {/* Main Title - Exact word-by-word stagger */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8">
                        <motion.div variants={wordContainerVariants} className="block overflow-hidden pb-1">
                            {titleLine1.split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordVariants}
                                    className="inline-block mr-[0.25em] last:mr-0 text-white"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.div variants={wordContainerVariants} className="block overflow-hidden">
                            {titleLine2.split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordVariants}
                                    className={`${word.toLowerCase().includes('flow') ? 'italic bg-gradient-to-r from-[#846ef7] via-[#a594f9] to-[#846ef7] bg-clip-text text-transparent' : 'text-white'} inline-block mr-[0.25em] last:mr-0`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={heroItemVariants}
                        className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                        style={{ color: '#9CA3AF' }}
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={heroItemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                                    boxShadow: '0 0 30px rgba(132, 110, 247, 0.4)',
                                }}
                            >
                                Neem contact op
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="#diensten"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#fff',
                                }}
                            >
                                Bekijk diensten
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <div
                    className="w-6 h-10 rounded-full flex justify-center pt-2 cursor-pointer"
                    style={{ border: '2px solid rgba(255,255,255,0.2)' }}
                    onClick={() => {
                        document.getElementById('diensten')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white/60"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
