import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './CheckOut.css'
import { Form } from 'react-bootstrap';
import useServiceDetails from '../../CustomHooks/useServiceDetails';


const Checkout = () => {
    const { id } = useParams()

    //useServiceDetails hook call to get each service data based on serviceId
    const [service] = useServiceDetails(id)  //id=serviceId both same here 
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
    const adressRef = useRef('')
    const [close, setClose] = useState(false)
    //existing logged in user ar info in user
    const [user] = useAuthState(auth);
    // console.log(user.email)


    const submitHandler = (e) => {
        e.preventDefault()
        const userEmail = emailRef.current.value
        const userName = nameRef.current.value
        const userPhone = phoneRef.current.value
        const userAdress = adressRef.current.value
        if (user) {
            alert(`Thank you ${userName} for the booking!`)
        }
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

                        <input className='w-100 mb-2' type="text" value='' name="name" placeholder='name' required readOnly disabled />
                        <br />
                        <input className='w-100 mb-2' type="email" value='' name="email" placeholder='email' required readOnly disabled />
                        <br />
                        <input className='w-100 mb-2' type="text" value='' name="service" placeholder='service' required readOnly />
                        <br />
                        <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                        <br />
                        <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                        <br />
                        <input className='btn btn-primary' type="submit" value="Place Order" />
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Checkout;