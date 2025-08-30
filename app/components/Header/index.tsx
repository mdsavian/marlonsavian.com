import * as React from "react";

const Header = () => {
  return (
    <nav className="z-50 flex items-center w-full sticky top-0">
      <div className="w-full max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold hover:text-white text-[32px]">
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
