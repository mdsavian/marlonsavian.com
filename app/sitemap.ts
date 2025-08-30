import { getAllPosts } from '../lib/blog';

export default function sitemap() {
  const posts = getAllPosts();
  
  const blogPosts = posts.map((post) => ({
    url: `https://marlonsavian.com/post/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://marlonsavian.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...blogPosts,
  ];
}