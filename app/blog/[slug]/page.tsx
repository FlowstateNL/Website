import { getPostData, getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostData(slug);
    return {
        title: `${post.title} | Flowstate Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    return (
        <article className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="text-purple-400 hover:text-purple-300 transition-colors mb-8 inline-block text-sm font-medium"
                >
                    &larr; Terug naar overzicht
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="text-purple-400 font-medium">{post.category}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        {post.title}
                    </h1>
                </div>

                {/* Blog content rendered from Markdown */}
                <div
                    className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-li:text-gray-300
            prose-strong:text-purple-300
            prose-a:text-purple-400 hover:prose-a:text-purple-300 transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                />

                <div className="mt-20 pt-10 border-t border-white/10">
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Wilt u ook een geautomatiseerde blogstrategie?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Flowstate helpt bedrijven met het opzetten van AI-systemen die precies zoals dit blog werken: automatisch, SEO-vriendelijk en met uw eigen stem.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                                boxShadow: '0 0 30px rgba(132, 110, 247, 0.4)',
                            }}
                        >
                            Neem contact op
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
