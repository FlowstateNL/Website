'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Over Flowstate</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
                        Wij bouwen de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">toekomst van werk</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Flowstate helpt bedrijven in Groningen en daarbuiten om exponentieel te schalen door slimme AI-automatisering, zonder het menselijke aspect uit het oog te verliezen.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { title: "Innovatie", desc: "Wij lopen voorop in de nieuwste AI-ontwikkelingen." },
                        { title: "Kwaliteit", desc: "Elke automatisering wordt tot in de puntjes getest." },
                        { title: "Impact", desc: "Wij bouwen oplossingen die echt resultaat leveren." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-12">Ontmoet het team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Chiel Snijder */}
                        <div className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/50 to-black/50 mb-6 overflow-hidden relative">
                                {/* Placeholder for real image */}
                                <div className="absolute inset-0 flex items-center justify-center text-4xl">👨‍🎓</div>
                            </div>
                            <h3 className="text-xl font-bold text-white">Chiel Snijder</h3>
                            <p className="text-purple-400 text-sm mb-2">Co-Founder & AI Strateeg</p>
                            <p className="text-gray-500 text-xs">Bedrijfskunde Student</p>
                        </div>

                        {/* Kevin Boon */}
                        <div className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900/50 to-black/50 mb-6 overflow-hidden relative">
                                {/* Placeholder for real image */}
                                <div className="absolute inset-0 flex items-center justify-center text-4xl">👨‍💻</div>
                            </div>
                            <h3 className="text-xl font-bold text-white">Kevin Boon</h3>
                            <p className="text-purple-400 text-sm mb-2">Co-Founder & Tech Lead</p>
                            <p className="text-gray-500 text-xs">Bedrijfskunde Student</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
