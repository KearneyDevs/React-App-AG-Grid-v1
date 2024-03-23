const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mb-16 mx-auto mt-10 space-y-0 md:mb-32 md:flex-row">
        <div className="flex flex-col mt-10 space-y-12 md:w-1/2 md:mt-0">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Welcome to Whisky Auctions
          </h1>
          <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
            Navigate and search this application to find auctions and distillery
            information utilising the Whisky Hunter API.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="object-cover max-h-[500px] w-full"
            src="/assets/imgs/whisky-hero.jpg"
            alt="Hero image showing barrels"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
