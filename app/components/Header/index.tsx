import * as React from "react";

const Header = () => {
  return (
    <nav className="bg-transparent px-12 md:px-20 h-32 z-50 flex items-center flex-wrap w-full h-44 fixed">
      <div className="flex grow items-center min-h-16">
        <div className="flex grow text-4xl font-bold ">
          <a href="/" className="block text-green">
            Marlon Savian
          </a>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-10 h-10 sm:stroke-blue stroke-green"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
