'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPostClientProps {
    post: {
        title: string;
        date: string;
        category: string;
        contentHtml?: string;
        excerpt: string;
        toc?: { id: string; text: string }[];
    };
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
};

export default function BlogPostClient({ post }: BlogPostClientProps) {
    const [activeId, setActiveId] = useState<string>('');
    // Use the TOC provided by the server, or default to empty
    const toc = post.toc || [];

    useEffect(() => {
        // Active heading detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        const headings = document.querySelectorAll('h2');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto px-4"
        >
            <div className="flex flex-col lg:flex-row justify-center gap-8 items-start">
                {/* Main Content */}
                <div className="w-full lg:max-w-[720px]">
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/blog"
                            className="text-purple-400 hover:text-purple-300 transition-colors mb-8 inline-block text-sm font-medium"
                        >
                            &larr; Terug naar overzicht
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="text-purple-400 font-medium">{post.category}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            {post.title}
                        </h1>
                    </motion.div>

                    {/* Blog content rendered from Markdown */}
                    <motion.div
                        variants={itemVariants}
                        className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-li:text-gray-300
                prose-strong:text-purple-300
                prose-a:text-purple-400 hover:prose-a:text-purple-300 transition-colors
                prose-img:rounded-3xl prose-img:border prose-img:border-white/10"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                    />

                    <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-white/10">
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Wilt u ook een geautomatiseerde blogstrategie?</h3>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Flowstate helpt bedrijven met het opzetten van AI-systemen die precies zoals dit blog werken: automatisch, SEO-vriendelijk en met uw eigen stem.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-purple-500/20"
                                style={{
                                    background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                                }}
                            >
                                Neem contact op
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Table of Contents (Desktop only) */}
                <aside className="hidden lg:block sticky top-32 w-[280px] shrink-0">
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6"
                    >
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Inhoudsopgave</h4>
                        <nav className="space-y-3">
                            {toc.map((item) => (
                                <motion.a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`block text-sm transition-all duration-300 ${activeId === item.id
                                        ? 'text-purple-400 font-semibold'
                                        : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1 h-1 rounded-full transition-all ${activeId === item.id ? 'bg-purple-400 scale-150' : 'bg-transparent'
                                            }`} />
                                        {item.text}
                                    </div>
                                </motion.a>
                            ))}
                        </nav>

                        {/* Social Proof / Tiny Call to Action in TOC */}
                        <div className="mt-10 pt-6 border-t border-white/5">
                            <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 italic">Aangedreven door Flowstate AI</p>
                        </div>
                    </motion.div>
                </aside>
            </div>
        </motion.div>
    );
}
