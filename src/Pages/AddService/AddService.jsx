import React from "react";
import { ToastContainer, toast } from "react-toastify";

const AddService = () => {

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.imageURL.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const descriptions = form.descriptions.value;
    console.log(title, image, ratings, price,descriptions)

    const services = {
      name: title,
      img: image,
      ratings: ratings,
      price: price,
      descriptions: descriptions,
    };
    console.log(services);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application.json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then(data=>console.log(data))
  };
  return (
    <div className="pt-24 pb-24 bg-gray-900">
      <form onSubmit={handleAddService} className="w-6/12 mx-auto">
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
  );
};

export default AddService;
