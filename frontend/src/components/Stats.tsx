const Stats = () => {
  return (
    <section id="stats">
      <div className="container flex flex-col items-center px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:items-start">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Placeholder for Whisky
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
            nobis non iste exercitationem ut vitae enim suscipit praesentium,
            quam veritatis accusamus obcaecati eligendi illo maxime aliquid,
            provident libero animi.
          </p>
        </div>

        {/* Numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* list item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  A h3 heading
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                A h3 heading
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda quis expedita magnam consectetur, eligendi et quae
                veritatis maxime sit fugiat aspernatur omnis tempora ullam in
                excepturi ipsum, unde necessitatibus alias?
              </p>
            </div>
          </div>

          {/* list item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  A h3 heading
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                A h3 heading
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda quis expedita magnam consectetur, eligendi et quae
                veritatis maxime sit fugiat aspernatur omnis tempora ullam in
                excepturi ipsum, unde necessitatibus alias?
              </p>
            </div>
          </div>

          {/* list item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  A h3 heading
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                A h3 heading
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda quis expedita magnam consectetur, eligendi et quae
                veritatis maxime sit fugiat aspernatur omnis tempora ullam in
                excepturi ipsum, unde necessitatibus alias?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
