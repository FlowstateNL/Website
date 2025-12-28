'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import Link from 'next/link';

// Real blog data from sitemap
const BLOG_POSTS = [
    {
        id: 1,
        title: "AI Chatbot inzetten: Meer doen met hetzelfde team",
        excerpt: "Ontdek hoe je met slimme chatbots je team kunt ontlasten en de klanttevredenheid kunt verhogen.",
        date: "17 Dec 2024",
        category: "Chatbots",
        readTime: "5 min",
        href: "https://goflowstate.nl/blog/ai-chatbot-inzetten-meer-doen-met-hetzelfde-team"
    },
    {
        id: 2,
        title: "AI Automatisering: Meer doen met minder",
        excerpt: "Leer hoe automatisering je bedrijfsprocessen kan versnellen en kosten kan verlagen.",
        date: "15 Dec 2024",
        category: "Automatisering",
        readTime: "4 min",
        href: "https://goflowstate.nl/blog/ai-automatisering-meer-doen-met-minder"
    },
    {
        id: 3,
        title: "Kunstmatige Intelligentie: Van verleden naar toekomst",
        excerpt: "Een diepe duik in de geschiedenis en de veelbelovende toekomst van AI technologie.",
        date: "13 Dec 2024",
        category: "Inzichten",
        readTime: "6 min",
        href: "https://goflowstate.nl/blog/kunstmatige-intelligentie-van-verleden-naar-toekomst"
    },
    {
        id: 4,
        title: "De kracht van een efficiënte workflow",
        excerpt: "Waarom een gestroomlijnde workflow de basis is voor elk succesvol modern bedrijf.",
        date: "06 Dec 2024",
        category: "Productiviteit",
        readTime: "4 min",
        href: "https://goflowstate.nl/blog/de-kracht-van-een-efficiente-work-flow-in-uw-bedrijf"
    },
    {
        id: 5,
        title: "AI Data Analyse voor strategische besluitvorming",
        excerpt: "Gebruik data-analyse om betere, snellere en meer strategische beslissingen te nemen.",
        date: "04 Dec 2024",
        category: "Data",
        readTime: "5 min",
        href: "https://goflowstate.nl/blog/ai-data-analyse-strategische-besluitvorming"
    },
    {
        id: 6,
        title: "Flowstaat werkplek creëren met AI",
        excerpt: "Hoe je met de juiste tools een omgeving creëert waarin iedereen in zijn flow komt.",
        date: "01 Dec 2024",
        category: "Cultuur",
        readTime: "3 min",
        href: "https://goflowstate.nl/blog/ai-automatisering-flowstaat-werkplek"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Het Flowstate Blog</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Inzichten & <span className="text-white/50">Nieuws</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-colors"
                        >
                            <Link href={post.href} target="_blank" className="flex flex-col h-full">
                                {/* Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                                    <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="text-purple-400 font-medium">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <span className="text-sm font-semibold text-white group-hover:translate-x-2 transition-transform inline-block">
                                            Lees meer &rarr;
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
}
