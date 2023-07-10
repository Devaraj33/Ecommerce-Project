import React from 'react'
import  { useState } from 'react';
import '../CSS/Log.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import loginContextLogin from '../../createContext/createContextLogin';
const Log = () => {

  const state=useContext(loginContextLogin);
    const [user,setUser]=useState('');
    const [pass,setPass]=useState('');
    const navigate=useNavigate();

      const onSubmit = (e) => {
        e.preventDefault();
        
        let localLogin=JSON.parse(localStorage.getItem('login'));
        if(user==""|| pass==""){
          alert('Enter the credentials')
          return
        }
        else if(localLogin==null) 
        {
          alert('Signup First');
          return
        }
        if(localLogin.username==user && localLogin.password==pass)
        {
            navigate('/');
            state.toggleFlag();
        }
        else{
          alert("Wrong Credentials")
        }
       

      }
    
  return (
    <div className='border'>
    <div className='log'>
      <div className='login_form'>
      <img src='./assest/Logo2.png' alt='Logo' />
      <h2>Welcome. Please sign-in...</h2>
        <input onChange={(e)=>setUser(e.target.value)} type="text" label='username' placeholder='Username' required />
        <input onChange={(e)=>setPass(e.target.value)} type="password" label='username' placeholder='Password' required />
        <button className="sub_btn" onClick={onSubmit}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Log;
