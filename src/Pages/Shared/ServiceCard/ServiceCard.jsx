import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { title, img, price, _id, description } = service;
  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-100">
            <h2 className="text-xl font-semibold text-secondary">Price ${price}</h2>
            <div>
              {description.length > 150 ? (
                <div className="mt-2">
                  {description.slice(0, 100) + "..."} <br />
                  <Link  to={`/service/${_id}`}>
                    <button
                      type="button"
                      className="flex items-center justify-center w-full p-3 mt-10 font-semibold tracking-wide rounded-md bg-secondary"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              ) : (
                <p>{description}</p>
              )}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
