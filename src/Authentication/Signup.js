import React, { useState } from 'react';
import "./Signup.css";
import insta from '../Images/insta.png'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';

function Signup() {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {signInWithEmailAndPassword(auth, email, password).then(
            updateProfile(auth.currentUser, {
                displayName: username})
        );

            })
            .catch(err => {
            alert(err);
        });
    }

  return (
    <div className='signup'>
        <img src={insta} alt="" /> 
         <h5 className='detail'>Sign up to see photos and videos from your friends.</h5>
                <button className='fbbtn'><div className="facebook">
            
                <div className='lfb'>Log in with Facebook</div>
                </div></button>
                <p className="or">OR</p>
          
      <input onChange={e => setEmail(e.target.value)} type="email" value={email} placeholder='Email' />
      <input  onChange={e => setFullname(e.target.value)} type="text" value={fullname} placeholder='Full Name' />
      <input  onChange={e => setUsername(e.target.value)} type="text" value={username} placeholder='Username' />
      <input  onChange={e => setPassword(e.target.value)} type="password" value={password} placeholder='password' />
      
     
        <div className='details'>People who use our service may have uploaded your contact information to Instagram. <span className='link'>Learn More</span></div>
         <div className='details'>By signing up, you agree to our <span className='link'>Terms , Privacy Policy and Cookies Policy.</span></div>
      
      <button onClick={handleSignup} className='signbtn'>Sign Up</button>

      
             { /*
             <div className="third-box">
               <p className="get-the-app">Get the app.</p>
            </div>
            <div className="four-box">
               <img src={google} alt='' className='google' />
               <img src={microsoft} alt='' className='ms' />
            </div>
            */ }
    </div>
  )
}

export default Signup