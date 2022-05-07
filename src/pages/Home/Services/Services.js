import React, { useEffect, useState } from 'react';
import './Services.css'
// image import and use technique
import repire1 from '../../../images/service-1.png'
import Service from '../Service/Service';

const Services = () => {
    // const services=[
    //     {id:1,name:'oil change' ,price:100, img:'https://i.ibb.co/rvxvmfj/c-joyful-he-FTscw-GDCA-unsplash.png'},
    //     {id:1,name:'oil change' ,price:100, img:repire1}
    // ]

    const [services, setServices] = useState([])
    //for data load
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])    //dependency empty means useEffect ek bar call hobey kinto dependency tey kicho thaka means jeita dependency tey rakha asey seitar change ar basis a useEffect bar bar call hobey

    console.log(services)

    return (
        <>
            {/*} <div>
            <img style={{margin:'20px'}} src={services[0].img} alt="" />
        </div>
        <div>
            <img  style={{margin:'20px'}}  src={services[1].img} alt=""/>
    </div>*/}
            <div className='main-container'>
                <p className='headline mt-4'>Welcome to varity of services of our company</p>
                <div className='services-container'>
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </div>
        </>

    );
};

export default Services;