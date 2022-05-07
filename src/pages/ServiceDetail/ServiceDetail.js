import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    //url parameter read
    const {serviceId}=useParams()
    
    return (
        <div>
            <h2>Welcome to details:{serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;