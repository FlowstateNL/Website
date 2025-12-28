'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function SEOBlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-purple-500/10 border border-purple-500/30">
                            <span className="text-sm font-medium text-purple-400">Automatiseer Content</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            SEO Blog <span className="text-purple-500">Creator</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Maak hoog scoren bij Google leuk en eenvoudig! Wij automatiseren jouw contentstrategie met een AI-gedreven systeem dat speciaal is getraind voor SEO-optimalisatie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary">
                                Start met Automatiseren
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10"
                    >
                        {/* Visual placeholder - could be the inbox visual */}
                        <div className="space-y-4">
                            <div className="h-4 bg-white/10 rounded w-3/4"></div>
                            <div className="h-4 bg-white/10 rounded w-1/2"></div>
                            <div className="h-32 bg-purple-500/10 rounded-xl border border-purple-500/20 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-green-400">SEO Score: 98/100</span>
                                </div>
                                <p className="text-gray-400 text-sm">"Flowstate helpt bedrijven in Groningen met het automatiseren van..."</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Waarom kiezen voor onze SEO Generator?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Tijdsbesparing", desc: "Reduceer contentcreatie van uren naar minuten." },
                            { title: "Lokale SEO (Groningen)", desc: "Specifiek geoptimaliseerd voor lokale vindbaarheid in Noord-Nederland." },
                            { title: "Continue Stroom", desc: "Nooit meer zonder inspiratie; altijd nieuwe blogs klaar om te posten." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2 text-purple-300">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-purple-900/20 to-black p-12 rounded-3xl text-center border border-white/10">
                    <h2 className="text-3xl font-bold mb-4">Klaar om te domineren in Google?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Laat ons u helpen om zichtbaarder te worden zonder dat het u extra tijd kost.
                    </p>
                    <Button href="/contact" variant="primary">
                        Vraag een demo aan
                    </Button>
                </section>
            </div>
        </main>
    );
}
