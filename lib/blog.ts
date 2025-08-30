import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { BlogPost, BlogPostMeta, BlogPostData } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'src/posts');

// Calculate reading time (average 200 words per minute)
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);
      const readTime = calculateReadTime(matterResult.content);
      
      return {
        id,
        slug: id,
        readTime,
        ...(matterResult.data as BlogPostMeta)
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }));
}

function getMorePosts(currentPostId: string) {
  const allPosts = getAllPosts();
  const currentPostIndex = allPosts.findIndex(post => post.id === currentPostId);

  let nextPost: BlogPost | null = null;
  let previousPost: BlogPost | null = null;

  if (currentPostIndex > 0) {
    nextPost = allPosts[currentPostIndex - 1];
  }
  if (currentPostIndex < allPosts.length - 1) {
    previousPost = allPosts[currentPostIndex + 1];
  }

  return { nextPost, previousPost };
}

export async function getPostBySlug(slug: string): Promise<BlogPostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Process markdown content
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = String(processedContent);
  const readTime = calculateReadTime(matterResult.content);
  const { nextPost, previousPost } = getMorePosts(slug);

  return {
    id: slug,
    slug,
    readTime,
    contentHtml,
    nextPost,
    previousPost,
    ...(matterResult.data as BlogPostMeta)
  };
}