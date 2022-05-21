import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './CheckOut.css'
import { Form } from 'react-bootstrap';
import useServiceDetails from '../../CustomHooks/useServiceDetails';
import axios from 'axios';
import { toast } from 'react-toastify';



const Checkout = () => {
    const { id } = useParams()

    //useServiceDetails hook call to get each service data based on serviceId
    const [service] = useServiceDetails(id)  //id=serviceId both same here 

    const phoneRef = useRef('')
    const adressRef = useRef('')
    const [close, setClose] = useState(false)
    //existing logged in user ar info in user
    const [user] = useAuthState(auth);
    console.log(user)
    // console.log(user.email)


    const submitHandler = (event) => {
        event.preventDefault()
        const orderInfo={
            name:user.displayName,
            service:service.name,
            serviceId:id,
            email:user.email,
            phone:phoneRef.current.value,             //phone:e.target.phone.value aita kaj kortesilo na tai useRef use korsi ai kaj ar jnno
            address:adressRef.current.value
        }
        if (user) {
            alert(`Thank you ${user.displayName} for the booking!`)
        }
        //console.log(orderInfo)

        axios.post('http://localhost:5000/order',orderInfo)   //http://localhost:5000/order ai api tey post req client side thekey hit korbey and server side through orderInfo stored hoa jabey database a
          .then( (response)=> {
            const {data}=response;
            if(data.insertedId){
                toast('order is booked')
                event.target.reset()
            }
          })
          .catch((error)=> {
            console.log(error);
          });
    }

    
    const navigate = useNavigate()
    const btnCliked = () => {
        setClose(!close)
        if (close) {
            navigate('/home')
        }
    }
    return (
        <>
            <div className='checkoutStyle'>
                <p>CheckOut Page for: {service.name}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4>Thank You for Selecting this '{service.name}' package</h4>
                    <button onClick={btnCliked} style={{ borderRadius: '5px', color: 'teal' }}>X</button>
                </div>

                <div className='container w-50 mx-auto'>
                    <h3 style={{ color: 'lightBlue', textAlign: 'center', marginTop: '50px' }}>CHECK-OUT</h3>
                    <Form onSubmit={submitHandler}>

                        <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                        <br />
                        <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                        <br />
                        <input className='w-100 mb-2' type="text" value={service?.name} name="service" placeholder='service' required readOnly />
                        <br />
                        <input className='w-100 mb-2' type="text" ref={adressRef} placeholder='Address' autoComplete='off' required />
                        <br />
                        <input className='w-100 mb-2' type="text" ref={phoneRef} placeholder='Phone' autoComplete='off' required />
                        <br />
                        <input className='btn btn-primary' type="submit" value="Place Order" />
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Checkout;