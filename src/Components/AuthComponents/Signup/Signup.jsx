import React, { useState } from 'react'
import './Signup.css'
import TextField from '../../TextField/TextField'
import CustomButton from '../../CustomButton/CustomButton';
import Lottie from 'lottie-react';
import home from '../../../assets/json/home.json'
import CustomDropDown from '../../CustomDropDown/CustomDropDown';
import {useNavigate} from 'react-router-dom'
import { ApiCalls } from '../../../api/apiCalls';

function Signup() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        phoneNo: '',
        email: '',
        password: '',
        blockNumber: '',
        roomNumber: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUserRegistration = () =>{
        setLoading(true);
        ApiCalls.registerStudent(formData, navigate);
    }

    return (
      <div className='signup'>
          <Lottie className="lottie-anim" animationData={home} loop={true}/>
          <div className="overlay"></div>

          <div className='form-container'>
            <h3>Register your account</h3>
            <TextField 
                fieldName = 'Username' 
                inputType='text'
                name='userName'
                inputValue = {formData.userName} 
                setInputValue = {handleChange} 
                inputPlaceholder = 'Enter your User name'
            />
            <TextField 
                fieldName = 'First Name' 
                inputType='text'
                name='firstName'
                inputValue = {formData.firstName} 
                setInputValue = {handleChange} 
                inputPlaceholder = 'Enter your First Name'
            />
            <TextField 
                fieldName = 'Last Name' 
                inputType='text'
                name='lastName'
                inputValue = {formData.lastName} 
                setInputValue = {handleChange} 
                inputPlaceholder = 'Enter your Last Name'
            />
            <TextField 
                fieldName = 'Phone Number' 
                inputType='text'
                name='phoneNo'
                inputValue = {formData.phoneNo} 
                setInputValue = {handleChange} 
                inputPlaceholder = 'Enter your Email Id'
            />
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
            <CustomDropDown  
                blockNumber={formData.blockNumber} 
                roomNumber={formData.roomNumber} 
                setFormData={setFormData}/>
            <CustomButton
                btnText="Register" onClick={handleUserRegistration} loading={loading}/>
            <div className="register-text">
                <p>Don't have an account?</p>
                <p className='click-register' onClick={() => navigate('/login')}>Click to Login</p>
            </div>  
        </div>
      </div>
    )
}

export default Signup