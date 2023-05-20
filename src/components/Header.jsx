import React from "react";

const Header = () => {
  return <header className="overflow-x-hidden h-36 flex items-center justify-between lg:px-28 px-10 bg-[#C4C4C4]">
    <h1 className="lg:text-6xl text-3xl font-bold hover:scale-110 transition-all text-[#333333] cursor-pointer poppins">Logo</h1>
    <div className="px-11 py-3 bg-black text-white rounded-full lg:text-3xl text-xl poppins font-medium cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-black hover:scale-110 transition-all">Log In</div>
  </header>;
};

export default Header;
