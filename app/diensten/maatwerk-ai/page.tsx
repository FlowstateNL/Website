'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function MaatwerkPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-pink-500/10 border border-pink-500/30">
                            <span className="text-sm font-medium text-pink-400">Custom Solutions</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Maatwerk <span className="text-pink-500">AI</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Geen standaard pakket? Geen probleem. Wij bouwen strategische AI-oplossingen die naadloos aansluiten op uw unieke bedrijfsprocessen in Groningen en omstreken.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary">
                                Bespreek uw Casus
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10"
                    >
                        {/* Custom code visual placeholder */}
                        <div className="font-mono text-sm space-y-2 text-gray-400">
                            <div><span className="text-pink-400">const</span> solution = <span className="text-blue-400">new</span> <span className="text-yellow-300">FlowstateAI</span>();</div>
                            <div>solution.<span className="text-blue-300">analyze</span>(yourProcess);</div>
                            <div>solution.<span className="text-blue-300">optimize</span>();</div>
                            <div className="text-green-400">// Resultaat: 300% efficiëntie</div>
                        </div>
                    </motion.div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Onze Aanpak</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Strategisch Advies", desc: "We kijken niet alleen naar code, maar naar uw complete bedrijfsstrategie." },
                            { title: "Technische Implementatie", desc: "Robuuste softwareontwikkeling die schaalbaar en veilig is." },
                            { title: "Lokale Partner", desc: "Gevestigd in Groningen, dus altijd dichtbij voor overleg en support." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2 text-pink-300">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-pink-900/20 to-black p-12 rounded-3xl text-center border border-white/10">
                    <h2 className="text-3xl font-bold mb-4">Heeft u een unieke uitdaging?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Wij houden van complexe puzzels. Daag ons uit.
                    </p>
                    <Button href="/contact" variant="primary">
                        Neem Contact Op
                    </Button>
                </section>
            </div>
        </main>
    );
}
