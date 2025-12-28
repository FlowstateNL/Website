import { getAllPosts } from '@/lib/blog';
import ClientBlogList from './ClientBlogList';

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Het Flowstate Blog</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
                        Inzichten & <span className="text-white/50">Nieuws</span>
                    </h1>
                </div>

                <ClientBlogList posts={posts} />
            </div>
        </main>
    );
}
