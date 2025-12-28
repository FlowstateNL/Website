import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    coverImage?: string;
    contentHtml?: string;
    toc?: { id: string; text: string }[];
}

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            const imageMatch = matterResult.content.match(/!\[.*?\]\((.*?)\)/);
            const coverImage = imageMatch ? imageMatch[1] : undefined;

            return {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                excerpt: matterResult.data.excerpt,
                category: matterResult.data.category || 'AI',
                coverImage,
                ...matterResult.data,
            } as BlogPost;
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const toc: { id: string; text: string }[] = [];

    // Plugin to extract TOC from HAST
    const extractToc = () => {
        return (tree: any) => {
            visit(tree, 'element', (node: any) => {
                if (node.tagName === 'h2') {
                    const id = node.properties?.id;
                    if (id) {
                        const getText = (n: any): string => {
                            if (n.type === 'text') return n.value;
                            if (n.children) return n.children.map(getText).join('');
                            return '';
                        };
                        toc.push({ id, text: getText(node) });
                    }
                }
            });
        };
    };

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(extractToc)
        .use(rehypeStringify)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        toc,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        category: matterResult.data.category || 'AI',
        ...matterResult.data,
    } as BlogPost;
}
