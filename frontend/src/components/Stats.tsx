const Stats = () => {
  return (
    <section id="stats">
      <div className="container flex flex-col items-center px-4 mb-10 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:items-start">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Application Overview
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            This application has been built using the following technologies for both the frontend 
            and backend directories.  
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
                  Frontend Technologies
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Frontend Technologies
              </h3>
              <p className="text-darkGrayishBlue mb-4">
                <strong>ReactJS:</strong> The library used for buiding the
                user interface for the web application through reusable
                components and using hooks that provide a more concise and 
                functional approach to managing state and side effects within components. 
              </p>
              <p className="text-darkGrayishBlue mb-4">
                <strong>TypeScript:</strong> Ehances JavaScript by adding static typing, which
                helps catch errors early in the development process.  
              </p>
              <p className="text-darkGrayishBlue mb-4">
                <strong>AG Grid:</strong> A feature-rich JavaScript library used for building 
                advanced data grid components in web applications.  It is designed to handle
                large datasets and provides a wide range of powerful features for displaying,
                editing, filtering and manipulating tabular data.
              </p>
              <p className="text-darkGrayishBlue mb-4">
                <strong>ZOD:</strong> A TypeScript-first schema declaration and validation library
                for JavaScript and TypeScript applications.  It provides developers with a simple and
                expressive way to define and validate data schemas.  
              </p>
              <p className="text-darkGrayishBlue">
                <strong>Tailwind CSS:</strong> A utility-first CSS framework that provides develoers with 
                a set of pre-designed utility classes to rapidly build user interfaces.
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
                  Backend Technologies
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Backend Technologies
              </h3>
              <p className="text-darkGrayishBlue mb-4">
                <strong>NodeJS:</strong> Provides the necessary runtime 
                environment and infrastructure for Express 
                to function effectively as a web framework 
                for building the backend API and to connect to the
                Whikey Hunter API.
              </p>
              <p className="text-darkGrayishBlue mb-4">
                <strong>Express:</strong> The framework required to create a proxy server in 
                order to connect to the Whisky Hunter API and develop my own
                endpoints.  This was due to security concerns coming from the 
                Whisky Hunter API which would not allow me to connect via the
                frontend due to the APIs CORS policy.
              </p>
              <p className="text-darkGrayishBlue">
                <strong>Node-Fetch:</strong> For making HTTP requests within the backend
                environment.  It sends a HTTP request to Whicky Hunter API to retrieve data 
                from multiple endpoints.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Stats;
