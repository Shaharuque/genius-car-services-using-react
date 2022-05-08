import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
const Register = () => {
    const navigate=useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef=useRef('')
    const [agree,setAgree]=useState(false)
    //react-firebase-hook(creating new user->register)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    //Update the current user's profile using useUpdateProfile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    //async await use kora hocchey to update/get user name while registering
    const submitHandler =async (e) => {
        e.preventDefault()
        //input field thekey data collect korar 3rd way
        const userName=e.target.name.value
        const userEmail=e.target.email.value
        const userPassword=e.target.password.value
        const userAdress=e.target.adress.value
        // const termsAgree=e.target.terms.checked
        // console.log(userName,userEmail,userPassword,termsAgree)
        // //user jodi terms ar checkbox a tick dey tahley e new user create kortey dibo
        // if(termsAgree){
        //     createUserWithEmailAndPassword(userEmail,userPassword)
        // }

        //user jodi terms ar checkbox a tick dey tahley e new user create kortey dibo
        await createUserWithEmailAndPassword(userEmail,userPassword)
        //user profile/name update while registering the user
        await updateProfile({ displayName:userName,adress:userAdress});
        console.log('Updated profile');
        //then registering ar kaj hoye geley navigate user to home
        navigate('/home')
        
    }
    
    if(user){
       console.log('user informations',user)
    }
    

    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h3 style={{ color: 'lightBlue', textAlign: 'center', marginTop: '50px' }}>Register page</h3>
                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='w-75' name='name' ref={nameRef} type="text" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAdress">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control className='w-75' name='adress'  type="text" placeholder="Adress" required />
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

                    <div>
                    <input onClick={()=>setAgree(!agree)} style={{marginRight:'3px',marginBottom:'20px'}} type="checkbox" name="terms" id="" />
                    {/*css styling a conditional rendering ar use */}
                    <label style={agree ?{fontWeight:'bold',color:'teal'} : {fontWeight:'bold',color:'lightblue'}} htmlFor="term&condition">Terms&conditions</label>
                    </div>

                    <Button variant="primary" type="submit" disabled={!agree}>
                        Register
                    </Button>
                </Form>
                <p style={{ marginTop: '10px' }}>Already registed? <Link to='/login' style={{ color: 'teal', fontWeight: '600' }}>login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;