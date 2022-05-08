import React from 'react';
import Glogo from '../../../images/images/google.png'
import facebook from '../../../images/images/facebook.png'
import git from '../../../images/images/git.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    //for google sign in purpose
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;
    if (error) {
        errorElement = <div>
            <p style={{color:'red',textAlign:'center',fontFamily:'monospace'}}>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }


    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ border: '1px solid lightblue', width: '400px', height: '1px' }}></div>
                <p style={{ margin: '0 10px', fontFamily: 'sans' }}>or</p>
                <div style={{ border: '1px solid lightblue', width: '400px', height: '1px' }}></div>
            </div>
            {errorElement}    {/*error khailey seita show koranor jnno */}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button style={{ borderRadius: '5px', border: '3px solid gray', padding: '5px', marginBottom: '10px', width: '250px' }} onClick={() => signInWithGoogle()}>
                    <img style={{ width: '20px', height: '20px', marginRight: '15px' }} src={Glogo} alt="" />
                    <span style={{ textAlign: 'center' }}>Sign in with Google</span>
                </button>

                <button style={{ borderRadius: '5px', border: '3px solid gray', padding: '5px', marginBottom: '10px', width: '250px' }}>
                    <img style={{ width: '20px', height: '20px', marginRight: '15px' }} src={facebook} alt="" />
                    <span style={{ textAlign: 'center' }}>Sign in with Facebook</span>
                </button>

                <button style={{ borderRadius: '5px', border: '3px solid gray', padding: '5px', marginBottom: '10px', width: '250px' }}>
                    <img style={{ width: '20px', height: '20px', marginRight: '15px' }} src={git} alt="" />
                    <span style={{ textAlign: 'center' }}>Sign in with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;