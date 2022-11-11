import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { name, imageURL, price, _id, descriptions } = service;
  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <PhotoProvider>
        <PhotoView src={imageURL}>
          <img src={imageURL} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">
            <h2 className="text-xl font-semibold text-secondary">
              Price ${price}
            </h2>
            <div>
              {descriptions.length > 150 ? (
                <div className="mt-2">
                  {descriptions.slice(0, 100) + "..."} <br />
                  <Link to={`/service/${_id}`}>
                    <button
                      type="button"
                      className="flex items-center justify-center w-full p-3 mt-10 font-semibold tracking-wide rounded-md bg-secondary"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              ) : (
                <p>{descriptions}</p>
              )}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
