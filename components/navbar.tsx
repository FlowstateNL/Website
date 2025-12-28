'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'Home' },
    // 'Diensten' is handled separately for dropdown
    { href: '/#proces', label: 'Proces' },
    { href: '/over-ons', label: 'Over ons' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
    { href: '/diensten/seo-blog-creator', label: 'SEO Blog Creator' },
    { href: '/diensten/offerte-automations', label: 'Offerte Automations' },
    { href: '/diensten/klantenservice-ai', label: 'Klantenservice AI' },
    { href: '/diensten/maatwerk-ai', label: 'Maatwerk AI' },
];

const linkVariants = {
    hover: {
        color: '#fff',
        transition: { duration: 0.2 },
    },
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#') || href.startsWith('/#')) {
            // e.preventDefault(); // Let Next.js handle routing, but smooth scroll if on same page
            // Not strictly preventing default here to allow cross-page anchor linking
            setIsMobileMenuOpen(false);
        } else {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.img
                                src="/logo.png"
                                alt="Flowstate Logo"
                                className="w-10 h-10 object-contain"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            />
                            <span className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">Flowstate</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <motion.div whileHover="hover">
                                <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative">
                                    Home
                                </Link>
                            </motion.div>

                            {/* Dropdown for Diensten */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-white transition-colors focus:outline-none py-2">
                                    Diensten
                                    <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden border border-white/10 backdrop-blur-xl bg-black/90 shadow-2xl"
                                        >
                                            <div className="py-2">
                                                {serviceLinks.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other Links */}
                            {navLinks.filter(l => l.label !== 'Home').map((link) => (
                                <motion.div key={link.href} whileHover="hover">
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-sm font-medium transition-colors relative"
                                        style={{ color: '#9CA3AF' }}
                                    >
                                        <motion.span
                                            variants={linkVariants}
                                            className="relative"
                                        >
                                            {link.label}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 h-0.5 bg-purple-500"
                                                initial={{ width: 0 }}
                                                whileHover={{ width: '100%' }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contact"
                                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                                        boxShadow: '0 0 20px rgba(132, 110, 247, 0.3)',
                                    }}
                                >
                                    Boek een call
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Toggle menu"
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden overflow-y-auto"
                        style={{ backgroundColor: '#000' }}
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-3xl font-bold tracking-tight hover:text-purple-500 transition-colors"
                            >
                                Home
                            </Link>

                            {/* Mobile Services Submenu */}
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-gray-500 text-sm uppercase tracking-widest">Diensten</span>
                                {serviceLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white text-xl font-medium hover:text-purple-500 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {navLinks.filter(l => l.label !== 'Home').map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="text-white text-3xl font-bold tracking-tight hover:text-purple-500 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/contact"
                                        className="mt-4 px-10 py-4 rounded-full font-bold text-lg text-white inline-block"
                                        style={{
                                            background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                                            boxShadow: '0 10px 30px -10px rgba(132, 110, 247, 0.5)'
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Boek een call
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
