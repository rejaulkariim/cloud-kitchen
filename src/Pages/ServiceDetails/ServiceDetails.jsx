import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ServiceDetails = () => {
  useTitle('Service Details')
  const { _id, imageURL, title, price, descriptions } = useLoaderData();

  return (
    <div className="pt-24 pb-24">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={imageURL}
              alt=""
              className="object-cover w-full lg:absolute lg:h-full"
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
                ${price}
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {title}
            </h5>
            <p className="mb-5 text-gray-800">{descriptions}</p>
            <div className="flex items-center">
              <Link to={`/reviews/${_id}`}>
                {" "}
                <button
                  type="submit"
                  className="btn btn-outline  bg-gray-900  text-white"
                >
                  Add Reviews
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
