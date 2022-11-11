import React from "react";

const AddService = () => {
  return (
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
  );
};

export default AddService;
