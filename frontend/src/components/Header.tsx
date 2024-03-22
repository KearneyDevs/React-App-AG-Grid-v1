import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" className="font-bold">
              Whisky Auctions
            </a>
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="/" className="hover:text-darkGrayishBlue">
              Home
            </a>
            <a href="/distilleries" className="hover:text-darkGrayishBlue">
              Distilleries
            </a>
            <a href="/auctions" className="hover:text-darkGrayishBlue">
              Auctions
            </a>
            <a href="/about" className="hover:text-darkGrayishBlue">
              About
            </a>
            <a href="/contact" className="hover:text-darkGrayishBlue">
              Contact
            </a>
          </div>

          {/* <a
            href="#"
            className="hidden md:block p-3 px-6 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight"
          >
            Get Started
          </a> */}

          {/* hamburger menu */}
          <button
            onClick={toggleMenu}
            id="menu-btn"
            className={`block hamburger md:hidden focus:outline-none ${
              isOpen ? "open" : ""
            }`}
          >
            <span className={`hamburger-top ${isOpen ? "open" : ""}`}></span>
            <span className={`hamburger-middle ${isOpen ? "open" : ""}`}></span>
            <span className={`hamburger-bottom ${isOpen ? "open" : ""}`}></span>
          </button>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute ${
              isOpen ? "flex" : "hidden"
            } flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <a href="/">Home</a>
            <a href="/distilleries">Distilleries</a>
            <a href="/auctions">Auctions</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
