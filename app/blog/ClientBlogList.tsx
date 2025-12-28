'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function ClientBlogList({ posts }: { posts: BlogPost[] }) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-gray-400">Er zijn nog geen blogberichten gepubliceerd. Kom snel terug!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-colors"
                >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                        {/* Image Placeholder */}
                        <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
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
        </div>
    );
}
