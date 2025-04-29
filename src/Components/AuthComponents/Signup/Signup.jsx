import React, { useState } from 'react'
import './Signup.css'
import TextField from '../../TextField/TextField'
import CustomButton from '../../CustomButton/CustomButton';
import Lottie from 'lottie-react';
import home from '../../../assets/json/home.json'
import CustomDropDown from '../../CustomDropDown/CustomDropDown';
import {useNavigate} from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleUserRegistration = () =>{
        console.log("Signup button clicked")
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
                inputValue = {userName} 
                setInputValue = {setUserName} 
                inputPlaceholder = 'Enter your Email Id'
            />
            <TextField 
                fieldName = 'First Name' 
                inputType='text'
                inputValue = {firstName} 
                setInputValue = {setFirstName} 
                inputPlaceholder = 'Enter your Email Id'
            />
            <TextField 
                fieldName = 'Last Name' 
                inputType='text'
                inputValue = {lastName} 
                setInputValue = {setLastName} 
                inputPlaceholder = 'Enter your Email Id'
            />
            <TextField 
                fieldName = 'Phone Number' 
                inputType='text'
                inputValue = {phoneNumber} 
                setInputValue = {setPhoneNumber} 
                inputPlaceholder = 'Enter your Email Id'
            />
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
            <CustomDropDown/>
            <CustomButton
                btnText="Register" onClick={handleUserRegistration}/>
            <div className="register-text">
                <p>Don't have an account?</p>
                <p className='click-register' onClick={() => navigate('/login')}>Click to Login</p>
            </div>  
        </div>
      </div>
    )
}

export default Signup