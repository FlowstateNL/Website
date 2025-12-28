'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Content from goflowstate.nl in Framer layout structure
const services = [
    {
        id: 'seo-blog',
        badge: 'Automatiseer repetitieve taken',
        title: 'SEO Blog Creator',
        subtitle: 'Maak hoog scoren bij Google leuk en eenvoudig!',
        description: 'AI-gestuurde content generatie met enorme tijdsbesparing. Van uren naar minuten met automatische keyword targeting voor optimale vindbaarheid.',
        tags: ['AI Content', 'SEO Optimized', 'Tijdbesparing'],
        visual: 'email-inbox', // Will render appropriate visual
        align: 'right', // text right, visual left
    },
    {
        id: 'offerte',
        badge: 'Versnel verkoopgroei',
        title: 'Offerte Automations',
        subtitle: 'Creëer een moeiteloze salesflow',
        description: 'Directe offertes versturen binnen seconden, professioneel en foutloos in je eigen huisstijl. Hogere conversie door snellere respons dan concurrenten.',
        tags: ['Leads', 'Content', 'Socials'],
        visual: 'sales-flow',
        align: 'left', // text left, visual right
    },
    {
        id: 'klantenservice',
        badge: 'Dagelijkse taken uitbesteden',
        title: 'Klantenservice AI',
        subtitle: 'Altijd bereikbaar voor je klanten!',
        description: '24/7 beschikbaarheid met directe antwoorden op vragen. Verhoogde klanttevredenheid door snelle afhandeling zonder wachttijden.',
        tags: ['24/7 Online', 'Instant Reply', 'Tevreden Klanten'],
        visual: 'chat-widget',
        align: 'right',
    },
    {
        id: 'maatwerk',
        badge: 'Slimmere systemen bouwen',
        title: 'Maatwerk AI',
        subtitle: 'Van idee tot technische flow',
        description: 'Start-up of scale-up? Wij leveren strategisch advies en bouwen de maatwerk software die jouw bedrijfsprocessen precies laat stromen zoals jij wilt. Jouw partner voor AI in Groningen en Noord-Nederland.',
        tags: ['Strategie', 'Maatwerk AI', 'Advies'],
        visual: 'custom-project',
        align: 'left',
    },
];

const itemVariants = {
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
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
};

// Visual components that mimic Framer's style
function EmailInboxVisual() {
    const leads = [
        { name: 'Thomas Shelby', company: 'Shelby.co', verified: true },
        { name: 'Jack Daniel', company: 'Xavier LLC', verified: true },
        { name: 'Mike Tylor', company: 'CMB LLC', verified: true },
    ];

    return (
        <div className="relative w-full max-w-md mx-auto" aria-label="Inbox visualisatie van geautomatiseerde leads">
            <div
                className="rounded-2xl p-6 space-y-3"
                style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div className="flex gap-2 mb-4">
                    {['Draft', 'Schedule', 'Sent'].map((tab, i) => (
                        <div
                            key={tab}
                            className="px-3 py-1.5 rounded-full text-xs"
                            style={{
                                background: i === 2 ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                                color: i === 2 ? '#A78BFA' : '#9CA3AF',
                            }}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                {leads.map((lead, i) => (
                    <motion.div
                        key={lead.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-xl"
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                            <div>
                                <div className="text-sm text-white font-medium">{lead.name}</div>
                                <div className="text-xs text-gray-500">{lead.company}</div>
                            </div>
                        </div>
                        {lead.verified && (
                            <div className="flex items-center gap-1 text-xs text-green-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                Verified
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function SalesFlowVisual() {
    return (
        <div className="relative w-full max-w-md mx-auto" aria-label="Sales pipeline automatisering visualisatie">
            <div
                className="rounded-2xl p-6"
                style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div className="text-sm text-gray-400 mb-4">Offerte versturen..</div>
                <div className="space-y-3">
                    {[
                        { label: 'LinkedIn', status: 'IT services' },
                        { label: 'E-mail', status: 'Sent' },
                        { label: 'Follow-up', status: 'Scheduled' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="flex items-center justify-between p-3 rounded-xl"
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                            }}
                        >
                            <span className="text-sm text-white">{item.label}</span>
                            <span className="text-xs text-purple-400">{item.status}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ChatWidgetVisual() {
    return (
        <div className="relative w-full max-w-sm mx-auto" aria-label="AI Chatbot widget demo">
            <div
                className="rounded-2xl overflow-hidden"
                style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div className="p-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500" />
                        <div>
                            <div className="text-sm text-white font-medium">Flowstate AI</div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                Online
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-3">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-purple-500/20 rounded-xl rounded-tl-none p-3 max-w-[80%]"
                    >
                        <p className="text-sm text-white">Hoi! Hoe kan ik je helpen?</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/5 rounded-xl rounded-tr-none p-3 max-w-[80%] ml-auto"
                    >
                        <p className="text-sm text-gray-300">Wat zijn jullie diensten?</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="bg-purple-500/20 rounded-xl rounded-tl-none p-3 max-w-[80%]"
                    >
                        <p className="text-sm text-white">Wij bieden AI automatiseringen! ✨</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function CustomProjectVisual() {
    return (
        <div className="relative w-full max-w-md mx-auto" aria-label="Maatwerk AI dashboard view">
            <div
                className="rounded-2xl p-6"
                style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div className="text-sm text-gray-400 mb-2">Hey David!</div>
                <div className="text-white font-medium mb-4">Here is your Custom project & schedule</div>

                <div className="mb-4 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="text-xs text-gray-500 mb-1">On going project:</div>
                    <div className="text-sm text-white mb-2">Customer Support Chatbot</div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 rounded-full bg-white/10">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: '90%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                        </div>
                        <span className="text-xs text-purple-400">90%</span>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, i) => (
                        <div
                            key={day}
                            className={`p-2 rounded ${i === 2 ? 'bg-purple-500/20 text-purple-400' : ''}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const visualComponents: Record<string, React.FC> = {
    'email-inbox': EmailInboxVisual,
    'sales-flow': SalesFlowVisual,
    'chat-widget': ChatWidgetVisual,
    'custom-project': CustomProjectVisual,
};

export default function ServicesSection() {
    return (
        <section id="diensten" className="relative py-24" style={{ backgroundColor: '#000' }}>
            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                        AI-oplossingen die uw bedrijf naar het{' '}
                        <span className="italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pr-1">
                            volgende niveau
                        </span>{' '}
                        tillen
                    </h2>
                </motion.div>

                {/* Alternating Service Sections */}
                <div className="space-y-32">
                    {services.map((service, index) => {
                        const Visual = visualComponents[service.visual];
                        const isLeft = service.align === 'left';

                        return (
                            <ServiceBlock
                                key={service.id}
                                service={service}
                                Visual={Visual}
                                isLeft={isLeft}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ServiceBlock({
    service,
    Visual,
    isLeft,
    index
}: {
    service: typeof services[0];
    Visual: React.FC;
    isLeft: boolean;
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isLeft ? '' : 'lg:flex-row-reverse'
                }`}
        >
            {/* Text Content */}
            <motion.div
                variants={itemVariants}
                className={isLeft ? 'lg:order-1' : 'lg:order-2'}
            >
                {/* Badge */}
                <div
                    className="inline-flex items-center px-4 py-2 rounded-full mb-6"
                    style={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                    }}
                >
                    <span className="text-sm font-medium text-purple-400">{service.badge}</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xl font-semibold text-white/80 mb-4">
                    {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8">
                    {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#9CA3AF',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Visual */}
            <motion.div
                variants={itemVariants}
                className={isLeft ? 'lg:order-2' : 'lg:order-1'}
            >
                <div className="relative">
                    {/* Glow effect behind visual */}
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                            transform: 'scale(1.2)',
                        }}
                    />
                    <Visual />
                </div>
            </motion.div>
        </motion.div>
    );
}
