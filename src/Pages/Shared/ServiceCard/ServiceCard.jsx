import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const{title, img, price, _id}=service
  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {title}
          </h2>
          <p className="dark:text-gray-100">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <Link to={`/service/${_id}`}>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
