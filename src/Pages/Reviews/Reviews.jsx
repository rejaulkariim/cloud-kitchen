import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contacts/AuthProvider/AuthProvider";

const Reviews = () => {
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gray-900 pt-32 pb-32">
      <form onSubmit={handlePlaceReview}>
        <h2 className="text-4xl text-white text-center font-bold mb-4">
          You are about to leave a review {title}
        </h2>
        <div className="grid grid-cols-1 w-6/12 mx-auto gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input w-full input-bordered input-secondary"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name "
            className="input w-full input-bordered input-secondary"
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input w-full input-bordered input-secondary"
          />
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full textarea-secondary"
            placeholder="Your Message"
          ></textarea>
          <input
            className="btn btn-secondary mb-8"
            type="submit"
            value="Leave Your Review"
          />
        </div>
      </form>
    </div>
  );
};

export default Reviews;
