'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function OffertePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-blue-500/10 border border-blue-500/30">
                            <span className="text-sm font-medium text-blue-400">Sales Optimalisatie</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Offerte <span className="text-blue-500">Automations</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Verlies nooit meer een lead door trage opvolging. Creëer en verstuur professionele offertes binnen enkele seconden, direct na het contactmoment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary">
                                Boost uw Sales
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10"
                    >
                        {/* Sales visual placeholder */}
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">📄</div>
                                <div>
                                    <div className="text-white font-bold">Offerte #2025-001</div>
                                    <div className="text-xs text-gray-500">Verzonden: Zojuist</div>
                                </div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">Concept</div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 bg-white/10 rounded w-full"></div>
                            <div className="h-2 bg-white/10 rounded w-full"></div>
                            <div className="h-2 bg-white/10 rounded w-2/3"></div>
                        </div>
                    </motion.div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Voordelen van Geautomatiseerde Offertes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Snelheid = Sales", desc: "De eerste die reageert, wint vaak de klant. Wees sneller dan uw concurrentie." },
                            { title: "Foutloze Documenten", desc: "Geen copy-paste fouten meer. Altijd de juiste prijzen en voorwaarden." },
                            { title: "CRM Integratie", desc: "Koppelt naadloos met uw bestaande CRM systemen voor perfect overzicht." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2 text-blue-300">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-blue-900/20 to-black p-12 rounded-3xl text-center border border-white/10">
                    <h2 className="text-3xl font-bold mb-4">Wilt u meer deals sluiten?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Flowstate uw verkoopproces kan stroomlijnen.
                    </p>
                    <Button href="/contact" variant="primary">
                        Gratis Adviesgesprek
                    </Button>
                </section>
            </div>
        </main>
    );
}
