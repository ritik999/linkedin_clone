import React,{useState} from 'react';
import './login.css'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../firebase/firebase';
import {useDispatch} from 'react-redux';

const Login = () => {

    const [email,setEmail]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const [name,setName]=useState<string>('');
    const [profilePic,setProfilePic]=useState<string>('');
    const dispatch=useDispatch();

    const register=():void=>{
        if(!name) alert('Please enter a full name');

        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            updateProfile(userCredential.user,{
                displayName:name,
                photoURL:profilePic
            }).then(()=>{
                dispatch({
                    type:'login',
                    payload:{email:userCredential.user.email,uid:userCredential.user.uid,displayName:name,photoUrl:profilePic}
                })
            })
        }).catch(err=> alert(err.message));
    }

    const loginToApp=():void=>{}

  return (
    <div className="login">
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' alt='linkedin' />

        <form>
            <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='full name required if registering' />

            <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />

            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email' />

            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' />

            <button onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member? <span className='login_register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login