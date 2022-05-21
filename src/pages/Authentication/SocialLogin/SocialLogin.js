import React from 'react';
import Glogo from '../../../images/images/google.png'
import facebook from '../../../images/images/facebook.png'
import git from '../../../images/images/git.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    //for google sign in purpose
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //for github signin purpose
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);

    //user login kora na tahley login page a niye jabey plus user social login korar por shei user k jei page thekey login ar jnno ashsey shei page a niye jabey
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    if(loading|| loadingGit){
        return <Loading></Loading>
    }
    
    let errorElement;
    if (error || errorGit) {
        errorElement = <div>
            <p style={{color:'red',textAlign:'center',fontFamily:'monospace'}}>Error: {error?.message} {errorGit?.message}</p>
        </div>
    }

    if (user || userGit) {
        navigate(from, { replace: true });
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

                <button style={{ borderRadius: '5px', border: '3px solid gray', padding: '5px', marginBottom: '10px', width: '250px' }} >
                    <img style={{ width: '20px', height: '20px', marginRight: '15px' }} src={facebook} alt="" />
                    <span style={{ textAlign: 'center' }}>Sign in with Facebook</span>
                </button>

                <button style={{ borderRadius: '5px', border: '3px solid gray', padding: '5px', marginBottom: '10px', width: '250px' }} onClick={()=>signInWithGithub()}>
                    <img style={{ width: '20px', height: '20px', marginRight: '15px' }} src={git} alt="" />
                    <span style={{ textAlign: 'center' }}>Sign in with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;