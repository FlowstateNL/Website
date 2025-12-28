import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

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
    // Get file names under /content/blog
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

            // Extract first image URL if present in content
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

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

import { visit } from 'unist-util-visit';

// ... imports

export async function getPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const toc: { id: string; text: string }[] = [];

    // Custom plugin to extract TOC from HAST
    const extractToc = () => {
        return (tree: any) => {
            visit(tree, 'element', (node: any) => {
                if (node.tagName === 'h2' && node.properties && node.properties.id) {
                    // Get text content recursively
                    const getText = (n: any): string => {
                        if (n.type === 'text') return n.value;
                        if (n.children) return n.children.map(getText).join('');
                        return '';
                    };

                    toc.push({
                        id: node.properties.id,
                        text: getText(node)
                    });
                }
            });
        };
    };

    // Use unified/remark/rehype to convert markdown into HTML with IDs
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(extractToc) // Capture TOC after IDs are assigned
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
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
