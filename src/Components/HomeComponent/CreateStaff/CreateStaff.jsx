import React, { useState } from 'react'
import './CreateStaff.css'
import TextField from '../../TextField/TextField.jsx'
import CustomButton from '../../CustomButton/CustomButton.jsx'

function CreateStaff() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="create-staff">
      <div className="form-details">
          <h3>Create Staff</h3>
          <TextField 
            fieldName='User Name'
            inputValue={userName}
            setInputValue={setUserName}
            inputPlaceholder='Enter your Username'
            inputType='text'
          />
          <TextField 
            fieldName='First Name'
            inputValue= {firstName}
            setInputValue= {setFirstName}
            inputPlaceholder= 'Enter your First name'
            inputType= 'text'
          />
          <TextField 
            fieldName='Last Name'
            inputValue={lastName}
            setInputValue={setLastName}
            inputPlaceholder='Enter your Last name'
            inputType='text'
          />
          <TextField 
            fieldName='Job Role'
            inputValue={jobRole}
            setInputValue={setJobRole}
            inputPlaceholder='Enter the Job Role'
            inputType='text'
          />
          <TextField 
            fieldName='Phone Number'
            inputValue={phoneNumber}
            setInputValue={setPhoneNumber}
            inputPlaceholder='Enter your Phone Number'
            inputType='number'
          />
          <TextField 
            fieldName='Email'
            inputValue={email}
            setInputValue={setEmail}
            inputPlaceholder='Enter your Email Id'
            inputType='text'
          />
          <TextField 
            fieldName='Password'
            inputValue={password}
            setInputValue={setPassword}
            inputPlaceholder='Enter the password'
            inputType='password'
          />
          <CustomButton btnText="Create Staff"/>
      </div>
    </div>
  )
}

export default CreateStaff