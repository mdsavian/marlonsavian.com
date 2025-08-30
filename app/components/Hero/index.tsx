import Photo from "./Photo";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col bg-primary w-full relative min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-8 flex flex-col items-center justify-center pt-20 pb-20 text-center flex-1">
        <div className="mb-8">
          <Photo />
        </div>

        <h1
          id="header-software-engineer"
          className="text-white text-5xl md:text-6xl font-bold text-center mb-8"
        >
          Marlon Savian
        </h1>

        <p
          className="text-white text-xl md:text-2xl max-w-2xl text-center leading-relaxed mb-16"
          id="span-description"
        >
          I&#39;m a software engineer who likes to craft solid and scalable products, always
          thinking about creating an exceptional user experience.
        </p>

        <div className="flex items-center space-x-8 mb-20">
          {/* GitHub Icon */}
          <a
            href="https://github.com/mdsavian"
            className="text-white hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/marlon-savian/"
            className="text-white hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Blog Section */}
        <div className="w-full max-w-4xl border-t border-white/20 pt-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-white text-3xl font-bold">Blog</h2>
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
      </div>
    </section>
  );
};

export default Hero;
