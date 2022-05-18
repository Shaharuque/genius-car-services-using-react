import React from 'react';
import { useServices } from '../../CustomHooks/useServices';


const ManageServices = () => {
    const [services,serServices] = useServices()

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');  //proceed ar vitor boolean (true or false) stored hoy
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //below the work is done to maanage data delete form DB and UI together ar the same time
                    const remainingServices=services.filter(service=>service._id!==id)
                    serServices(remainingServices)
                })
                .catch(err => console.log(err));
        }
    }
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {
                    services.map(service => <div key={service._id}>
                        <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>

                    </div>)
                }
            </div>
        );
    };

    export default ManageServices;