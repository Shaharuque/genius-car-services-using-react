import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../CustomHooks/useServiceDetails';

const ServiceDetail = () => {
    //url parameter read
    const { serviceId } = useParams()
    //nicher kaj tuku ekta custom hook ar moddhey korbo jeno same jinish different component a just call korei use kortey pari
    // const [service,setService]=useState({})
    // useEffect(()=>{
    //     const url=`http://localhost:5000/service/${serviceId}` //backend a url/api create korey ashsi and shei api thekey dynamic id ar basis a service fetched hobey

    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[serviceId])

    //useServiceDetails hook call to get each service data based on serviceId
    const [service]=useServiceDetails(serviceId)

    return (
        <div>
            <h2>You are about to book:{service.name}</h2>
            <h2>You are about to book:{service._id}</h2>
            {/*jei service id ar jnno checkout hocchey sei id url a dekhassi */}
            <Link to={`/checkout/${serviceId}`}>      
                <button>
                    Procced checkout
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;