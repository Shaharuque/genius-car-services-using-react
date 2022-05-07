import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmRef = useRef('')

    const submitHandler = (e) => {
        e.preventDefault()
        //input field thekey data collect korar 3rd way
        const userName=e.target.name.value
        const userEmail=e.target.email.value
        const userPassword=e.target.password.value
        console.log(userName,userEmail,userPassword)
    }

    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h3 style={{ color: 'lightBlue', textAlign: 'center', marginTop: '50px' }}>Register page</h3>
                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='w-75' name='name' type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-75' name='email' ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-75' name='password' ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPass">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className='w-75' ref={confirmRef} type="password" placeholder="Confirm-password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p style={{ marginTop: '10px' }}>Already registed? <Link to='/login' style={{ color: 'teal', fontWeight: '600' }}>login</Link></p>
            </div>
        </div>
    );
};

export default Register;