'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CTASection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - replace with actual endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#000' }}>
            {/* Background glows */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                }}
            />
            <div
                className="absolute bottom-0 left-1/4 w-[500px] h-[400px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                }}
            />

            {/* Border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-12"
                >
                    {/* Badge */}
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
                        style={{
                            background: 'rgba(124, 58, 237, 0.1)',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            color: '#A78BFA',
                        }}
                    >
                        Contact
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Klaar voor meer{' '}
                        <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent pr-1">
                            flow
                        </span>
                        ?
                    </h2>

                    <p className="text-lg max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Of je nu vragen hebt of direct wilt automatiseren: laat het ons weten via het formulier en wij pakken het naadloos op.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
                >
                    <a
                        href="mailto:info@goflowstate.nl"
                        className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(124, 58, 237, 0.15)' }}
                        >
                            <svg className="w-5 h-5" style={{ color: '#A78BFA' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 mb-1">E-mail</div>
                            <div className="text-white font-medium">info@goflowstate.nl</div>
                        </div>
                    </a>

                    <a
                        href="tel:+31611325051"
                        className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(124, 58, 237, 0.15)' }}
                        >
                            <svg className="w-5 h-5" style={{ color: '#A78BFA' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 mb-1">Telefoonnummer</div>
                            <div className="text-white font-medium">+31 6 11 32 50 51</div>
                        </div>
                    </a>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    onSubmit={handleSubmit}
                    className="p-8 rounded-3xl"
                    style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                                Voornaam
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Jan"
                                required
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                                Achternaam
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="de Boer"
                                required
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jandeboer@gmail.com"
                                required
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                Telefoonnummer
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="06 4928 1292"
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                            Bericht
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hallo, ik ben Jan en ik heb hulp nodig met...."
                            rows={5}
                            required
                            className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{
                            background: isSubmitted
                                ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                                : 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                            boxShadow: isSubmitted
                                ? '0 0 30px rgba(16, 185, 129, 0.3)'
                                : '0 0 30px rgba(132, 110, 247, 0.3)',
                        }}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Versturen...
                            </span>
                        ) : isSubmitted ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Verstuurd!
                            </span>
                        ) : (
                            'Verstuur formulier'
                        )}
                    </button>
                </motion.form>

                {/* Location Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex items-center justify-center gap-2 text-sm"
                    style={{ color: '#6B7280' }}
                >
                    <svg className="w-4 h-4" style={{ color: '#7C3AED' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Groningen, Nederland
                </motion.div>
            </div>
        </section>
    );
}
