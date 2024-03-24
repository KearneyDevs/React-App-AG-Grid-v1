import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" className="font-bold">
              Whisky Auctions
            </NavLink>
          </div>
          <div className="hidden space-x-6 md:flex">
            <NavLink to="/" className="hover:text-darkGrayishBlue">
              Home
            </NavLink>
            <NavLink to="/distilleries" className="hover:text-darkGrayishBlue">
              Distilleries
            </NavLink>
            <NavLink to="/auctions" className="hover:text-darkGrayishBlue">
              Auctions
            </NavLink>
          </div>

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
            } z-10 flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/distilleries">Distilleries</NavLink>
            <NavLink to="/auctions">Auctions</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
