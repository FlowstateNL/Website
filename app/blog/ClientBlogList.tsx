'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function ClientBlogList({ posts }: { posts: BlogPost[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>('Alles');

    const categories = useMemo(() => {
        const cats = ['Alles', ...new Set(posts.map(post => post.category))];
        return cats;
    }, [posts]);

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'Alles') return posts;
        return posts.filter(post => post.category === selectedCategory);
    }, [posts, selectedCategory]);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-gray-400">Er zijn nog geen blogberichten gepubliceerd. Kom snel terug!</p>
            </div>
        );
    }

    return (
        <div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-colors"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                {/* Image Section */}
                                <div className="h-48 bg-gray-900 relative overflow-hidden">
                                    {post.coverImage ? (
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                                            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="text-purple-400 font-medium">{post.category}</span>
                                        <span>•</span>
                                        <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors text-white">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
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
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
