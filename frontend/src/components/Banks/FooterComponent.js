import React from "react";

const FooterComponent = () => {
  return (
    <div className="bg-[#eea3c5] text-neutral-50">
      <>
        <footer className=" body-font text-neutral-50">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      First Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Second Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Third Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Fourth Link
                    </p>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      First Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Second Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Third Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Fourth Link
                    </p>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      First Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Second Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Third Link
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Fourth Link
                    </p>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  SUBSCRIBE
                </h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label
                      for="footer-field"
                      className="leading-7 text-sm text-neutral-50"
                    >
                      Placeholder
                    </label>
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                  </button>
                </div>
                <p className="text-neutral-50 text-sm mt-2 md:text-left text-center">
                  Bitters chicharrones fanny pack
                  <br className="lg:block hidden" />
                  waistcoat green juice
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default FooterComponent;
