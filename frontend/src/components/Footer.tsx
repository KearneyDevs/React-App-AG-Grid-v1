const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue">
      <div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div>
            <a href="/" className="font-bold text-white">
              Whisky Auctions
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white text-center md:text-left">
            <a href="/" className="hover:text-brightRed">
              Home
            </a>
            <a href="/distilleries" className="hover:text-brightRed">
              Distilleries
            </a>
            <a href="/auctions" className="hover:text-brightRed">
              Auctions
            </a>
            <a href="/about" className="hover:text-brightRed">
              About
            </a>
            <a href="/contact" className="hover:text-brightRed">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
