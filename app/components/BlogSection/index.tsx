"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "../../../types/blog";

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const allPosts = posts;
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts;

    const query = searchQuery.toLowerCase();
    return allPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [allPosts, searchQuery]);

  return (
    <div id="blog" className="w-full max-w-4xl pt-4 relative text-left">
      {/* Header with Search */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-white text-[28px] font-bold">Blog</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-10 top-2.5 text-white/40 hover:text-white/80 transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="mb-6 text-white/60 text-sm">
          {filteredPosts.length === 0 ? (
            <p>No posts found for &quot;{searchQuery}&quot;</p>
          ) : (
            <p>
              {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} found for &quot;
              {searchQuery}&quot;
            </p>
          )}
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
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

              {/* Tags */}
              <div className="flex items-center gap-2 mb-4">
                {post.tags &&
                  post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
              </div>

              <div className="flex items-center gap-3 text-white/50 text-sm text-left">
                <time dateTime={post.date}>
                  {new Date(post.date + 'T00:00:00').toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </a>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && !searchQuery && (
        <p className="text-white/60 text-center py-8">No posts found.</p>
      )}

      {filteredPosts.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <p className="text-white/60 mb-4">No posts match your search.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-white hover:text-white/80 transition-colors text-sm underline"
          >
            Clear search to see all posts
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
