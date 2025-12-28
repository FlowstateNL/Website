'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

interface BlogPostClientProps {
    post: {
        title: string;
        date: string;
        category: string;
        contentHtml?: string;
        excerpt: string;
        toc?: { id: string; text: string }[];
        blocks?: { id: string | null; content: string }[];
    };
    relatedPosts: {
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        category: string;
        coverImage?: string;
    }[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }
    },
};

// Sub-component for each section to handle individual visibility and animation
const SectionBlock = ({
    id,
    content,
    onActive
}: {
    id: string | null,
    content: string,
    onActive: (id: string, isVisible: boolean) => void
}) => {
    const ref = useRef(null);
    // Use a tighter margin for heading activation to prevent multiple sections triggering at once
    const isInView = useInView(ref, { margin: "-30% 0px -40% 0px" });

    useEffect(() => {
        if (id && isInView) {
            onActive(id, true);
        }
    }, [isInView, id, onActive]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-li:text-gray-300
                prose-strong:text-purple-300
                prose-a:text-purple-400 hover:prose-a:text-purple-300 transition-colors
                prose-img:rounded-3xl prose-img:border prose-img:border-white/10
                prose-hr:border-white/10"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
    const [activeId, setActiveId] = useState<string>('intro');

    const toc = post.toc || [];
    const blocks = post.blocks || [];

    // Use useCallback to prevent infinite loop of re-renders
    const handleActive = useCallback((id: string, isVisible: boolean) => {
        if (isVisible) {
            setActiveId(id);
        }
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
                <div className="w-full lg:max-w-[720px] pb-32">
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/blog"
                            className="text-purple-400 hover:text-purple-300 transition-colors mb-8 inline-block text-sm font-medium"
                        >
                            &larr; Terug naar overzicht
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-12" id="article-title">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="text-purple-500 font-medium">{post.category}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            {post.title}
                        </h1>
                    </motion.div>

                    {/* Blog content rendered block by block */}
                    <div className="space-y-12">
                        {blocks.map((block, index) => (
                            <SectionBlock
                                key={index}
                                id={block.id}
                                content={block.content}
                                onActive={handleActive}
                            />
                        ))}
                    </div>

                    <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-white/10">
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center shadow-2xl shadow-purple-500/5">
                            <h3 className="text-2xl font-bold text-white mb-4">Wilt u ook een geautomatiseerde blogstrategie?</h3>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Flowstate helpt bedrijven met het opzetten van AI-systemen die precies zoals dit blog werken: automatisch, SEO-vriendelijk en met uw eigen stem.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-xl shadow-purple-500/20"
                                style={{
                                    background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                                }}
                            >
                                Neem contact op
                            </Link>
                        </div>
                    </motion.div>

                    {/* Related Posts Section */}
                    {relatedPosts.length > 0 && (
                        <motion.div variants={itemVariants} className="mt-32">
                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">Gerelateerde artikelen</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedPosts.map((rPost) => (
                                    <Link
                                        key={rPost.slug}
                                        href={`/blog/${rPost.slug}`}
                                        className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300"
                                    >
                                        <span className="text-xs text-purple-400 font-medium mb-2 block">{rPost.category}</span>
                                        <h4 className="text-lg font-bold text-white hover:text-purple-300 transition-colors mb-2 w-fit">
                                            {rPost.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            {rPost.excerpt}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Table of Contents (Desktop only) */}
                <aside className="hidden lg:block sticky top-32 w-[280px] shrink-0">
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
                    >
                        <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-[0.15em] opacity-40">Inhoudsopgave</h4>
                        <nav className="space-y-4">
                            {toc.map((item, index) => {
                                // Match the TOC id (e.g. 'article-title') with the activeId or block ID ('intro')
                                const isFirstItem = index === 0;
                                const isActive = activeId === item.id || (activeId === 'intro' && isFirstItem);

                                return (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`flex items-start gap-4 text-sm transition-all duration-500 group w-fit ${isActive
                                            ? 'text-purple-400 font-semibold'
                                            : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                        whileHover={{ x: 4 }}
                                    >
                                        <div className="relative mt-2 shrink-0">
                                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-purple-500 scale-125 shadow-[0_0_10px_rgba(132,110,247,0.8)]' : 'bg-white/10 group-hover:bg-white/30'
                                                }`} />
                                        </div>
                                        <span className={`leading-snug transition-all duration-500`}>
                                            {item.text}
                                        </span>
                                    </motion.a>
                                );
                            })}
                        </nav>

                        <div className="mt-10 pt-6 border-t border-white/5">
                            <Link href="/contact" className="text-[10px] text-purple-400/50 uppercase tracking-widest hover:text-purple-400 transition-colors flex items-center gap-2 w-fit">
                                <span>→</span>
                                <span>Start jouw automatisering</span>
                            </Link>
                        </div>
                    </motion.div>
                </aside>
            </div>
        </motion.div>
    );
}
