'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    {
        number: '01',
        title: 'Slim Analyseren',
        description: 'We beoordelen jouw behoeften en identificeren AI-oplossingen om workflows te stroomlijnen.',
        visual: (
            <div className="space-y-2 mt-4">
                {['System check', 'Process check', 'Speed check', 'Manual work', 'Repetitive task'].map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: '#9CA3AF' }}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {item}
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-3 text-xs text-purple-400"
                >
                    Analyzing current workflow..
                </motion.div>
            </div>
        ),
    },
    {
        number: '02',
        title: 'AI Ontwikkeling',
        description: 'Ons team bouwt intelligente automatiseringssystemen op maat van jouw bedrijfsprocessen.',
        visual: (
            <motion.pre
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-[9px] leading-relaxed font-mono overflow-hidden"
                style={{ color: 'rgba(167, 139, 250, 0.7)' }}
            >
                {`class AutomationTrigger:
  def __init__(self, threshold):
    self.threshold = threshold
    self.status = "inactive"
  
  def check_trigger(self, value):
    if value > self.threshold:
      self.status = "active"
      return "Automation triggered!"
    return "No action taken."`}
            </motion.pre>
        ),
    },
    {
        number: '03',
        title: 'Naadloze Integratie',
        description: 'We integreren AI-oplossingen soepel in je bestaande infrastructuur.',
        visual: (
            <div className="flex items-center justify-center gap-4 mt-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-[10px] text-center font-medium"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.05) 100%)',
                        border: '1px solid rgba(124,58,237,0.3)',
                        color: '#A78BFA',
                    }}
                >
                    Our<br />solution
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-1"
                >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400" />
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-[10px] text-center font-medium"
                    style={{
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 100%)',
                        border: '1px solid rgba(59,130,246,0.3)',
                        color: '#60A5FA',
                    }}
                >
                    Your<br />stack
                </motion.div>
            </div>
        ),
    },
    {
        number: '04',
        title: 'Continue Optimalisatie',
        description: 'We verfijnen en verbeteren de automatisering voor langdurige groei.',
        visual: (
            <div className="space-y-2 mt-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between p-2 rounded-lg text-xs"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                    <span className="text-green-400">Chatbot system</span>
                    <span className="text-green-300 text-[10px]">+20% efficiency</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-between p-2 rounded-lg text-xs"
                    style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                    <span className="text-blue-400">Workflow system</span>
                    <span className="text-blue-300 text-[10px]">Update available</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-between p-2 rounded-lg text-xs"
                    style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
                >
                    <span className="text-purple-400">Sales system</span>
                    <span className="text-purple-300 text-[10px]">Up to date ✓</span>
                </motion.div>
            </div>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export default function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="proces" className="relative py-32" style={{ backgroundColor: '#000' }}>
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
                        style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#60A5FA',
                        }}
                    >
                        Ons Proces
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Ons eenvoudige, slimme en{' '}
                        <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pr-1">
                            schaalbare
                        </span>{' '}
                        proces
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Wij ontwerpen, ontwikkelen en implementeren automatiseringstools die jou helpen slimmer te werken, niet harder.
                    </p>
                </motion.div>

                {/* 2x2 Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.number}
                            variants={cardVariants}
                            className="group relative p-6 rounded-3xl transition-all duration-300"
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                            whileHover={{
                                borderColor: 'rgba(124, 58, 237, 0.3)',
                                scale: 1.02,
                            }}
                        >
                            {/* Large step number background */}
                            <div
                                className="absolute top-4 right-4 text-6xl font-extrabold pointer-events-none"
                                style={{ color: 'rgba(255,255,255,0.03)' }}
                            >
                                {step.number}
                            </div>

                            {/* Step badge */}
                            <div
                                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                                style={{
                                    background: 'rgba(124, 58, 237, 0.15)',
                                    border: '1px solid rgba(124, 58, 237, 0.3)',
                                    color: '#A78BFA',
                                }}
                            >
                                Stap {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                                {step.description}
                            </p>

                            {/* Visual */}
                            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                {step.visual}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
