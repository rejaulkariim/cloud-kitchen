import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title} =useLoaderData();

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default ServiceDetails;