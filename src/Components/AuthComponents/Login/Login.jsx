import React, { useState } from 'react'
import './Login.css'
import TextField from '../../TextField/TextField'
import CustomButton from '../../CustomButton/CustomButton';
import Lottie from 'lottie-react';
import home from '../../../assets/json/home.json'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleLogin = () => {
    console.log("Login Button clicked");
  }
  return (
    <div className='login'>
        <Lottie className="lottie-anim" animationData={home} loop={true}/>
        <div className="overlay"></div>
        
        <div className="form-container">
          <h3>Login to your account</h3>
          <TextField 
            fieldName = 'Email' 
            inputType='text'
            inputValue = {emailValue} 
            setInputValue = {setEmailValue} 
            inputPlaceholder = 'Enter your Email Id'
          />
          <TextField 
            fieldName = 'Password' 
            inputType='password'
            inputValue = {passwordValue} 
            setInputValue = {setPasswordValue} 
            inputPlaceholder = 'Enter your Email Id'
          />
          <CustomButton
            btnText="Login" onClick={handleLogin}/>
          <div className="register-text">
            <p>Don't have an account?</p>
            <p className='click-register' onClick={() => navigate('/signup')}>Click to Register</p>
          </div>  
        </div>
    </div>
  )
}

export default Login