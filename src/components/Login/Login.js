import React from 'react';
import { useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import newLogo from '../../Images/newLogo2.jpg';


const Login = () => {
    const {signInUsingGoogle} = useAuth();

    //location redirect
    const location =useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
    }


    return (
        <div className="container w-50 mx-auto m-5 p-3 shadow">
            <div className="text-center">
                <img src={newLogo} width="180" height="180" className="d-inline-block align-top" alt=""/>
                <h2>SignIn to <span style={{color:'orange'}}>Travel</span><span style={{color:'#5356ad'}}>Hero</span></h2> 
              
               <small>Sign in with google</small> <br />  
               <button
                onClick={ handleGoogleLogin }
                className="m-1 btn text-light  mx-auto mt-3" style={{backgroundColor:'#5356ad'}}
                 ><i className="fab fa-google text-light mb-2"></i> Google Sign-in</button>  
               
            </div>
        </div>
    );
}

export default Login;