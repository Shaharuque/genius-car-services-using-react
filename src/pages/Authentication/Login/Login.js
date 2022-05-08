import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
//for tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate=useNavigate()
    //useState use na korey useRef ar through tey form a inputed user email and password get kora hocchey
    const emailRef=useRef('')
    const passwordRef=useRef('')
    //useSignInWithEmailandPassword react-firebase-hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    //reset password ar jnno useSendPasswordResetEmail react-firebase-hook use kora holo
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);  
    
    //user login kora na tahley to login page a niye jabey plus user login korar por shei user k jei page thekey login ar jnno ashsey shei page a niye jabey
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const submitHandler=(e)=>{
        e.preventDefault()
        //input field thekey data collect korar 2nd way (input field thekey data collect kora 1st way holo useState use kora)
        const userEmail=emailRef.current.value         //returns the input field value(user email)
        const userPassword=passwordRef.current.value  //returns the input field value (user password)
        console.log(userEmail,userPassword)
        signInWithEmailAndPassword(userEmail,userPassword)
    }
    //userEmail and password db tey existing thakley user k navigate korey dibo ekta page a
    if(user){
        navigate(from, { replace: true });
    }
    
    //page show korar agey spinner show korassi
    if(loading|| sending){
        return <Loading></Loading>
    }
    
    //error show
    let errorElement;
    if(error){
        errorElement = <div>
        <p style={{color:'red',textAlign:'center',fontFamily:'monospace'}}>Error: {error?.message} </p>
        </div>
    }
    //console.log(user)

    const nevigateToRegister=()=>{
        navigate('/register')
    }
    const resetPassword=async ()=>{
        const userEmail=emailRef.current.value         //returns the input field value(user email)
        if(userEmail){
            await sendPasswordResetEmail(userEmail);
            toast('password reset link sent into your mail adress');
        }
        else{
            toast('Provide valid email please')
        }
    }


    return (
        <div className='container w-50 mx-auto'>
            <h3 style={{color:'teal',textAlign:'center',marginTop:'50px'}}>Login page</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button style={{color:'white',backgroundColor:'lightgreen',border:'1px solid lightgreen'}} type="submit">
                    Login
                </Button>
    {/*<p style={{color:'red',fontWeight:'600'}}>{error?.message}</p>*/}
                {errorElement}
            </Form>
            <p style={{marginTop:'10px'}}>New to genius car? <span onClick={nevigateToRegister} style={{color:'red',cursor:'pointer'}}>register now</span></p>
            <p style={{marginTop:'10px'}}>Forget password? <span onClick={resetPassword} style={{color:'teal',cursor:'pointer'}}>Reset password</span></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;