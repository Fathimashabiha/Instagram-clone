import React, { useState } from 'react';
import "./Login.css";
import insta from '../Images/insta.png'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';


function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
     signInWithEmailAndPassword(auth, email, password);

    };

  return (
    <div className='login'>
      <img src={insta} alt="" />
      <input onChange={e => setEmail(e.target.value)} type="email" value={email} placeholder='Email' />
      <input onChange={e => setPassword(e.target.value)} type="password" value={password} placeholder='password' />
      <button onClick={handleLogin}>Log in</button>       
    </div>
  )
}

export default Login