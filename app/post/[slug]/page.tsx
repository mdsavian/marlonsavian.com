import { Metadata } from 'next';
import { getAllPostSlugs, getPostBySlug } from '../../../lib/blog';
import { BlogPostData } from '../../../types/blog';
import Divider from '../../components/Divider';
import ScrollToTop from '../../components/ScrollToTop';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  return {
    title: `${post.title} | Marlon Savian`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Marlon Savian'],
      url: `https://marlonsavian.com/post/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post: BlogPostData = await getPostBySlug(params.slug);

  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <a 
            href="/#blog" 
            className="text-white hover:text-white/80 transition-colors text-sm flex items-center gap-2"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Blog
          </a>
        </div>

        {/* Post Header */}
        <header className="mb-12">
          <h1 className="text-white text-[42px] font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <p className="text-white/80 text-lg mt-4 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Post Content */}
        <article 
          className="prose prose-lg prose-invert max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-white/90 prose-p:leading-relaxed
            prose-a:text-white prose-a:underline hover:prose-a:text-white/80
            prose-strong:text-white prose-em:text-white/90
            prose-code:text-white prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-white/10 prose-pre:border prose-pre:border-white/20
            prose-blockquote:border-l-white/30 prose-blockquote:text-white/80
            prose-ul:text-white/90 prose-ol:text-white/90
            prose-li:text-white/90"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 mb-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Divider before navigation */}
        <Divider />

        {/* Navigation */}
        {(post.nextPost || post.previousPost) && (
          <nav className="mt-8 pt-0">
            <div className="flex justify-between items-center">
              {post.previousPost && (
                <a 
                  href={`/post/${post.previousPost.slug}`}
                  className="text-white hover:text-white/80 transition-all duration-300 group bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 hover:border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
                >
                  <div className="text-sm text-white/60 mb-1 group-hover:text-white/80 transition-colors">← Previous</div>
                  <div className="font-medium group-hover:text-white transition-colors">{post.previousPost.title}</div>
                </a>
              )}
              
              {post.nextPost && (
                <a 
                  href={`/post/${post.nextPost.slug}`}
                  className="text-white hover:text-white/80 transition-all duration-300 group text-right ml-auto bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 hover:border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
                >
                  <div className="text-sm text-white/60 mb-1 group-hover:text-white/80 transition-colors">Next →</div>
                  <div className="font-medium group-hover:text-white transition-colors">{post.nextPost.title}</div>
                </a>
              )}
            </div>
          </nav>
        )}
      </div>
      
      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}