'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function KlantenservicePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-green-500/10 border border-green-500/30">
                            <span className="text-sm font-medium text-green-400">24/7 Ondersteuning</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Klantenservice <span className="text-green-500">AI</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Zorg dat uw klanten zich 24/7 gehoord voelen. Onze AI-chatbots en agents handelen routinevragen direct af, zodat uw team zich kan focussen op complexe zaken.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary">
                                Verbeter uw Service
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10"
                    >
                        {/* Chat visual placeholder */}
                        <div className="space-y-4">
                            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none w-3/4 mr-auto">
                                <p className="text-xs text-gray-300">👋 Hoi! Wat zijn jullie openingstijden?</p>
                            </div>
                            <div className="bg-green-500/20 p-3 rounded-2xl rounded-tr-none w-3/4 ml-auto border border-green-500/20">
                                <p className="text-xs text-green-100">Wij zijn open van 09:00 tot 17:00, maar ik kan u hier 24/7 helpen! ✨</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Waarom AI in Klantenservice?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Altijd Beschikbaar", desc: "Nooit meer wachten op een antwoord, ook niet in het weekend." },
                            { title: "Kostenbesparend", desc: "Handel tot 80% van de vragen automatisch af zonder extra personeel." },
                            { title: "Consistente Kwaliteit", desc: "Altijd het juiste antwoord, op de juiste toon, elke keer weer." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2 text-green-300">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-green-900/20 to-black p-12 rounded-3xl text-center border border-white/10">
                    <h2 className="text-3xl font-bold mb-4">Tevreden klanten, minder werkdruk</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Laat AI het zware werk doen en geef uw klanten de service die ze verdienen.
                    </p>
                    <Button href="/contact" variant="primary">
                        Start Pilot
                    </Button>
                </section>
            </div>
        </main>
    );
}
