import React, { useState } from 'react'
import './Login.css'
import TextField from '../../TextField/TextField'
import CustomButton from '../../CustomButton/CustomButton';
import Lottie from 'lottie-react';
import home from '../../../assets/json/home.json'
import {useNavigate} from 'react-router-dom'
import {ApiCalls} from '../../../api/apiCalls.js';

function Login() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = () =>{
    setLoading(true);
    ApiCalls.handleLogin(formData.email, formData.password, navigate, setLoading);
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
            name='email'
            inputValue = {formData.email} 
            setInputValue = {handleChange} 
            inputPlaceholder = 'Enter your Email Id'
          />
          <TextField 
            fieldName = 'Password' 
            inputType='password'
            name='password'
            inputValue = {formData.password} 
            setInputValue = {handleChange} 
            inputPlaceholder = 'Enter your Email Id'
          />
          <CustomButton
            btnText="Login" onClick={handleLogin} loading={loading}/>
          <div className="register-text">
            <p>Don't have an account?</p>
            <p className='click-register' onClick={() => navigate('/signup')}>Click to Register</p>
          </div>  
        </div>
    </div>
  )
}

export default Login