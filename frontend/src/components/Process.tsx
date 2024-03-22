const Process = () => {
  return (
    <section id="process">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">First One</h2>

        <div className="flex flex-col  mt-24 md:flex-row md:space-x-6">
          {/* One */}
          <div className="flex flex-col items-center mb-20 p-6 space-y-6 rounded-lg bg-veryLightGray md:mb-0 md:w-1/3">
            <img
              src="/assets/imgs/whisky-avatar.jpg"
              className="w-32 h-32 -mt-14 rounded-full object-cover"
              alt=""
            />
            <h5 className="text-lg font-bold">Text Name</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              dolore commodi labore? Repellat dolorum nostrum laudantium
              recusandae expedita soluta error optio, aperiam vel dolores
              tempora commodi facilis. Maxime, animi molestiae.
            </p>
          </div>

          {/* two */}
          <div className="flex flex-col items-center mb-20 p-6 space-y-6 rounded-lg bg-veryLightGray md:mb-0 md:w-1/3">
            <img
              src="/assets/imgs/whisky-cards.jpg"
              className="w-32 h-32 -mt-14 rounded-full object-cover"
              alt=""
            />
            <h5 className="text-lg font-bold">Text Name</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              dolore commodi labore? Repellat dolorum nostrum laudantium
              recusandae expedita soluta error optio, aperiam vel dolores
              tempora commodi facilis. Maxime, animi molestiae.
            </p>
          </div>

          {/* three */}
          <div className="flex flex-col items-center mb-20 p-6 space-y-6 rounded-lg bg-veryLightGray md:mb-0 md:w-1/3">
            <img
              src="/assets/imgs/barrels-whisky.jpg"
              className="w-32 h-32 -mt-14 rounded-full object-cover"
              alt=""
            />
            <h5 className="text-lg font-bold">Text Name</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              dolore commodi labore? Repellat dolorum nostrum laudantium
              recusandae expedita soluta error optio, aperiam vel dolores
              tempora commodi facilis. Maxime, animi molestiae.
            </p>
          </div>
        </div>

        <div className="my-16">
          <a
            href="#"
            className="p-2 px-6 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
