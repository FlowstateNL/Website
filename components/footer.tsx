'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
    diensten: [
        { label: 'SEO Blog Creator', href: '#diensten' },
        { label: 'Offerte Automations', href: '#diensten' },
        { label: 'Klantenservice AI', href: '#diensten' },
        { label: 'Maatwerk AI', href: '#diensten' },
    ],
    bedrijf: [
        { label: 'Home', href: '/' },
        { label: 'Over ons', href: '/over-ons' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ],
};

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
        e.preventDefault();
        const element = document.getElementById(href.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 group">
                            <motion.img
                                src="/logo.png"
                                alt="Flowstate Logo"
                                className="w-10 h-10 object-contain"
                                whileHover={{ scale: 1.1 }}
                            />
                            <span className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">Flowstate</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: '#6B7280' }}>
                            AI-automatiseringen die jouw bedrijf laten groeien. Gevestigd in Groningen, werkend voor heel Nederland.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="mailto:info@goflowstate.nl"
                                className="transition-colors hover:opacity-80"
                                style={{ color: '#6B7280' }}
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:opacity-80"
                                style={{ color: '#6B7280' }}
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Diensten</h3>
                        <ul className="space-y-3">
                            {footerLinks.diensten.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-sm transition-colors hover:text-white hover:text-purple-300"
                                        style={{ color: '#6B7280' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Bedrijf</h3>
                        <ul className="space-y-3">
                            {footerLinks.bedrijf.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-sm transition-colors hover:text-white hover:text-purple-300"
                                        style={{ color: '#6B7280' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                    <p className="text-sm" style={{ color: '#4B5563' }}>
                        © 2025 Flowstate. Alle rechten voorbehouden.
                    </p>
                    <div className="flex items-center gap-6 text-sm" style={{ color: '#4B5563' }}>
                        <Link href="/algemene-voorwaarden" className="hover:text-gray-300 transition-colors">
                            Algemene Voorwaarden
                        </Link>
                        <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
