import Photo from "./Photo";
import Header from "../Header";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full relative min-h-screen max-w-6xl mx-auto px-8 items-center pt-8 pb-20 text-center">
        <Header />
        <div className="mb-4">
          <Photo />
        </div>

        <h1 id="header-software-engineer" className="text-white text-[36px] font-bold text-center">
          Marlon Savian
        </h1>

        <p
          className="text-white text-[18px] max-w-[450px] text-center leading-relaxed mb-8"
          id="span-description"
        >
          A space for coding experiments, tech insights, and lessons learned.
        </p>

        <div className="flex items-center space-x-8 mb-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/mdsavian"
            className="text-white hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <title>GitHub profile</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/marlon-savian/"
            className="text-white hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <title>LinkedIn profile</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Blog Section */}
        <div className="w-full max-w-4xl pt-4 relative">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-white text-[32px] font-bold">Blog</h2>
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
  );
};

export default Hero;
