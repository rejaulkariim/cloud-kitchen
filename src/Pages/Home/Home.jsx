import React from "react";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl text-white font-bold leading-none sm:text-6xl">
              Welcome to
              <span className="text-secondary"> Cloud Kitchen</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"></div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <section>
        <div className=" text-center mt-8 mb-8">
          <h1 className="text-black text-4xl font-bold">Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            totam.
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Add Services
                </p>
              </div>
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                Add Your Services...
              </h5>
              <p className="mb-5 text-gray-800">
                <span className="font-bold">Lorem ipsum</span> dolor sit amet,
                consectetur adipiscing elit. Etiam sem neque, molestie sit amet
                venenatis et, dignissim ut erat. Sed aliquet velit id dui
                eleifend, sed consequat odio sollicitudin.
              </p>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="btn btn-outline bg-secondary text-white"
                >
                 Add Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
