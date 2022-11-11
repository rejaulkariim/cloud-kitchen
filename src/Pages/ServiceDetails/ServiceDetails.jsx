import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { img, title, price, description } = useLoaderData();

  return (
    <div className="pt-24 pb-24">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={img}
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
               ${price}
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {title}
            </h5>
            <p className="mb-5 text-gray-800">
              {description}
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
      <div className="pt-24 pb-24 bg-gray-900">
        <form className="w-6/12 mx-auto">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              name="title"
              placeholder="Name"
              className="input input-bordered input-secondary w-full"
              required
            />
            <input
              type="text"
              name="imageURL"
              placeholder="imageUrl"
              className="input input-bordered input-secondary w-full"
              required
            />

            <input
              type="text"
              name="ratings"
              placeholder="Rating"
              className="input input-bordered input-secondary w-full"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered input-secondary w-full"
              required
            />
            <textarea
              className="textarea textarea-bordered"
              name="descriptions"
              placeholder="Descriptions"
              required
            ></textarea>
          </div>
          <input className="btn" type="submit" value="Add a Service" />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
