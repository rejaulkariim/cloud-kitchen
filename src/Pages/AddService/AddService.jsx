import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Services");
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.title.value;
    const price = form.price.value;
    const imageURL = form.imageURL.value;
    const descriptions = form.descriptions.value;

    const services = {
      name,
      imageURL,
      price,
      descriptions,
    };
    fetch("https://cloud-kitchen-server-pi.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("service added successfully");
          // alert("service added successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gray-900 pt-32 pb-32">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Please Add a Service
      </h2>
      <form onSubmit={handlePlaceReview}>
        <div className="grid grid-cols-1 w-6/12 mx-auto gap-4">
          <input
            name="title"
            type="text"
            placeholder="Title"
            className="input w-full input-bordered input-secondary"
            required
          />
          <input
            name="imageURL"
            type="url"
            placeholder="ImageURL"
            className="input w-full input-bordered input-secondary"
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="input w-full input-bordered input-secondary"
            required
          />
          <textarea
            name="descriptions"
            className="textarea textarea-bordered h-24 w-full textarea-secondary"
            placeholder="descriptions"
            required
          ></textarea>
          <input
            className="btn btn-secondary mb-8"
            type="submit"
            value="Add a Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
