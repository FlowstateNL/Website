'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Algemene Voorwaarden</h1>
                    <p className="text-gray-400 text-sm mb-12">Laatst bijgewerkt: 28 December 2025</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Algemeen</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Flowstate (hierna te noemen: "Opdrachtnemer") en de opdrachtgever, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Dienstverlening</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Flowstate biedt diensten aan op het gebied van AI-automatisering en softwareontwikkeling. Wij spannen ons in om de diensten met zorg uit te voeren, in overeenstemming met de met de opdrachtgever gemaakte afspraken en procedures.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Intellectueel Eigendom</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Tenzij anders overeengekomen, berusten alle rechten van intellectueel eigendom op de door Flowstate ontwikkelde software, databanken, apparatuur of andere materialen uitsluitend bij Flowstate of diens licentiegevers.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Aansprakelijkheid</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Flowstate is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat Flowstate is uitgegaan van door of namens de opdrachtgever verstrekte onjuiste en/of onvolledige gegevens.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Toepasselijk Recht</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Op alle rechtsbetrekkingen waarbij Flowstate partij is, is uitsluitend het Nederlands recht van toepassing. Geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Flowstate is gevestigd.
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
