'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Laten we <span className="text-purple-500">praten</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Klaar om je bedrijf te transformeren met AI? Vul het formulier in of boek direct een call.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-white">Direct contact</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">@</span>
                                    <a href="mailto:info@goflowstate.nl" className="hover:text-white transition-colors">info@goflowstate.nl</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">📍</span>
                                    <span>Groningen, Nederland</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-1 rounded-3xl border border-white/10 bg-black overflow-hidden h-[650px]">
                            <iframe
                                src="https://calendly.com/kevin-goflowstate/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=846ef7"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Calendly"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Naam</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Je naam" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="je@email.nl" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Bericht</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Vertel ons over je project..." />
                            </div>
                            <Button className="w-full" variant="secondary">
                                Verstuur bericht
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
