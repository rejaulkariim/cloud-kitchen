import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { title, price, description } = useLoaderData();

  return (
    <div className="pt-24 pb-24">
        <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto">
      <figure>
        <img src="https://placeimg.com/200/280/arch" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;
