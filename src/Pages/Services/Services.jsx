import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  useTitle('Services')
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center pt-24 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
