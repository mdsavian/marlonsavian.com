const BlogSection = () => {
  return (
    <div className="w-full max-w-4xl pt-4 relative">
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
    </div>
  );
};

export default BlogSection;
