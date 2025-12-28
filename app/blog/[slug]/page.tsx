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

    return (
        <article className="min-h-screen pt-32 pb-20 px-6">
            <BlogPostClient post={post} />
        </article>
    );
}
