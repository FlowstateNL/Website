import { getPostData, getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

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

    // Fetch related posts (latest 3 excluding current)
    const allPosts = getAllPosts();
    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    return (
        <article className="min-h-screen pt-32 pb-20 px-6">
            <BlogPostClient post={post} relatedPosts={relatedPosts} />
        </article>
    );
}
