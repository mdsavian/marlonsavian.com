import { getAllPosts } from "../../../lib/blog";

const BlogSection = () => {
  const posts = getAllPosts();

  return (
    <div id="blog" className="w-full max-w-4xl pt-4 relative text-left">
      {/* Header with Search */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-white text-[28px] font-bold">Blog</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts"
            className="bg-white/10 text-white placeholder-white/60 px-4 py-2 rounded-lg border border-white/20 focus:border-white focus:outline-none w-64 backdrop-blur-sm"
          />
          <svg
            className="w-5 h-5 text-white/60 absolute right-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group"
          >
            <a href={`/post/${post.slug}`} className="block">
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-white/80 transition-colors text-left">
                {post.title}
              </h3>

              <p className="text-white/70 text-base leading-relaxed mb-4 text-left">
                {post.description}
              </p>

              <div className="flex items-center gap-3 text-white/50 text-sm text-left">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                {post.readTime && (
                  <>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </>
                )}
              </div>
            </a>
          </article>
        ))}
      </div>

      {posts.length === 0 && <p className="text-white/60 text-center py-8">No posts found.</p>}
    </div>
  );
};

export default BlogSection;
