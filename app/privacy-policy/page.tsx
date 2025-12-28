'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Privacybeleid</h1>
                    <p className="text-gray-400 text-sm mb-12">Laatst bijgewerkt: 28 December 2025</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Inleiding</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Flowstate respecteert de privacy van de bezoekers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Verwerking van Persoonsgegevens</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Wanneer u zich aanmeldt voor onze diensten vragen we u om persoonsgegevens te verstrekken. Deze gegevens worden gebruikt om de dienst uit te kunnen voeren. De gegevens worden opgeslagen op eigen beveiligde servers van Flowstate of die van een derde partij.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Wij verzamelen gegevens voor onderzoek om een beter inzicht te krijgen in onze klanten, zodat wij onze diensten hierop kunnen afstemmen. Deze website maakt gebruik van "cookies" om te helpen analyseren hoe gebruikers de site gebruiken.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Als u vragen heeft over deze privacyverklaring, kunt u contact met ons opnemen via info@goflowstate.nl.
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
