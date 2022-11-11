import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contacts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://cloud-kitchen-server-pi.vercel.app/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="pt-32 pb-32">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">You have {reviews.length} reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 mx-auto">
        {reviews.map((review) => (
          <ReviewRow key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
