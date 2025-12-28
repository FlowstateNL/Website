import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import * as cheerio from 'cheerio';

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
    blocks?: { id: string | null; content: string }[];
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
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(extractToc)
        .use(rehypeStringify)
        .process(matterResult.content);

    const fullHtml = processedContent.toString();

    // Split content into blocks based on H2 tags using Cheerio
    const $ = cheerio.load(fullHtml, { xmlMode: false });
    // Cheerio.load often wraps in <html><head><body>, for fragment use .load(html, null, false) is deprecated in some versions but generally we check output.
    // Let's use standard load and extract body.

    const body = $('body');
    const blocks: { id: string | null; content: string }[] = [];

    let currentBlockParts: string[] = [];
    let currentId: string | null = null;

    // Iterate over root level elements
    body.contents().each((_, elem) => {
        const tagName = $(elem).prop('tagName')?.toLowerCase();

        if (tagName === 'h2') {
            // If we have accumulated content for the previous block, push it
            if (currentBlockParts.length > 0) {
                blocks.push({
                    id: currentId,
                    content: currentBlockParts.join('')
                });
            }
            // Start new block
            currentBlockParts = [];
            currentId = $(elem).attr('id') || null;
            // Add the H2 itself to the new block
            currentBlockParts.push($.html(elem));
        } else {
            // Add element to current block
            currentBlockParts.push($.html(elem));
        }
    });

    // Push the final block
    if (currentBlockParts.length > 0) {
        blocks.push({
            id: currentId,
            content: currentBlockParts.join('')
        });
    }

    // If no H2s were found, put everything in one block
    if (blocks.length === 0 && fullHtml.length > 0) {
        blocks.push({ id: null, content: fullHtml });
    }

    return {
        slug,
        contentHtml: fullHtml, // Keep for fallback
        blocks,
        toc,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        category: matterResult.data.category || 'AI',
        ...matterResult.data,
    } as BlogPost;
}
