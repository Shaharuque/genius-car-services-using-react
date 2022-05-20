import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './CheckOut.css'
import { Form } from 'react-bootstrap';
import useServiceDetails from '../../CustomHooks/useServiceDetails';


const Checkout = () => {
    const {id}=useParams()

    //useServiceDetails hook call to get each service data based on serviceId
    const [service]=useServiceDetails(id)  //id=serviceId both same here 
    const nameRef=useRef('')
    const phoneRef=useRef('')
    const emailRef=useRef('')
    const adressRef=useRef('')
    const [close,setClose]=useState(false)
    //existing logged in user ar info in user
    const [user] = useAuthState(auth);
    // console.log(user.email)
    

    const submitHandler=(e)=>{
        e.preventDefault()
        const userEmail=emailRef.current.value
        const userName=nameRef.current.value
        const userPhone=phoneRef.current.value
        const userAdress=adressRef.current.value
        if(user){
            alert(`Thank you ${userName} for the booking!`)
        }
    }
    const navigate=useNavigate()

    const btnCliked=()=>{
        setClose(!close)
        if(close){
            navigate('/home')
        }
    }
    return (
        <>
        <div className='checkoutStyle'>
        <p>CheckOut Page for: {service.name}</p>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <h4>Thank You for Selecting this '{service.name}' package</h4>
                <button onClick={btnCliked} style={{borderRadius:'5px',color:'teal'}}>X</button>
            </div>

            <div className='container w-50 mx-auto'>
                <h3 style={{ color: 'lightBlue', textAlign: 'center', marginTop: '50px' }}>CHECK-OUT</h3>
                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='w-75' name='name' ref={nameRef}  type="text" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAdress">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control className='w-75' name='adress' ref={adressRef}  type="text" placeholder="Adress" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-75' name='email' value={user?.email} ref={emailRef}  type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control className='w-75' name='phone number' ref={phoneRef}  type="text" placeholder="phone number" required />
                    </Form.Group>

                    
                    <button style={{backgroundColor:'teal',padding:'8px',color:'white',borderRadius:'10px',border:'1px solid teal'}} type="submit">
                        SUBMIT
                    </button>
                </Form>
            </div>
        </div>
        </>
    );
};

export default Checkout;