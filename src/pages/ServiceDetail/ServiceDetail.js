import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    //url parameter read
    const { serviceId } = useParams()
    const [service,setService]=useState({})

    useEffect(()=>{
        const url=`http://localhost:5000/service/${serviceId}` //backend a url/api create korey ashsi and shei api thekey dynamic id ar basis a service fetched hobey

        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])

    return (
        <div>
            <h2>You are about to book:{service.name}</h2>
            <Link to='/checkout'>
                <button>
                    Procced checkout
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;