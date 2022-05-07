import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    //useState use na korey useRef ar through tey form a inputed user email and password get kora hocchey
    const emailRef=useRef('')
    const passwordRef=useRef('')

    const submitHandler=(e)=>{
        e.preventDefault()
        //input field thekey data collect korar 2nd way (input field thekey data collect kora 1st way holo useState use kora)
        const userEmail=emailRef.current.value         //returns the input field value
        const userPassword=passwordRef.current.value  //returns the input field value
        console.log(userEmail,userPassword)
    }

    const navigate=useNavigate()
    const nevigateToRegister=()=>{
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 style={{color:'teal',textAlign:'center',marginTop:'50px'}}>Login page</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button style={{color:'white',backgroundColor:'lightgreen',border:'1px solid lightgreen'}} type="submit">
                    Login
                </Button>
            </Form>
            <p style={{marginTop:'10px'}}>New to genius car? <span onClick={nevigateToRegister} style={{color:'red',cursor:'pointer'}}>register now</span></p>
        </div>
    );
};

export default Login;