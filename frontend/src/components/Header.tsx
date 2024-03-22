const Header = () => {
  return (
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
          <a href="/" className="hover:text-darkGrayishBlue">
            Auctions
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            About
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Contact
          </a>
        </div>

        {/* <a
            href="#"
            className="hidden md:block p-3 px-6 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight"
          >
            Get Started
          </a> */}
      </div>
    </nav>
  );
};

export default Header;
