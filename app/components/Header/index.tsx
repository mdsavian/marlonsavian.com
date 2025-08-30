import * as React from "react";

const Header = () => {
  return (
    <nav className="bg-transparent z-50 flex items-center w-full sticky top-0">
      <div className="w-full max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center">
          <a
            href="/"
            className="text-primary hover:text-white transition-colors duration-200 text-lg font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
