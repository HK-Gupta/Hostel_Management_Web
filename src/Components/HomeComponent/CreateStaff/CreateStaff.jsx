import React, { useState } from 'react'
import './CreateStaff.css'
import TextField from '../../TextField/TextField.jsx'
import CustomButton from '../../CustomButton/CustomButton.jsx'
import { useNavigate } from 'react-router-dom'
import { ApiCalls } from '../../../api/apiCalls.js'
import UserModel from '../../../models/UserModel.js'

function CreateStaff() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    jobRole: '',
    phoneNo: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
  };
  const [loading, setLoading] = useState(false); 
  const user = UserModel.fromStorage();

  const createStaff = () => {
    setLoading(true);
    const data = {
      "userName": formData.userName,
      "firstName": formData.firstName,
      "lastName": formData.lastName,
      "jobRole": formData.jobRole,
      "phoneNo": formData.phoneNo,
      "email": formData.email,
      "password": formData.password,
    }

    ApiCalls.createStaff(data, navigate, setLoading);
  }

  return (
    <div className="create-staff">
      {
        user.authority==0 
        ? <div className="universal">
          <div className="access-message">
            <p className='access-text'>You don't have permission to see these files</p>
          </div>
        </div>
        : <div className="form-details">
            <h3>Create Staff</h3>
            <TextField 
              fieldName='User Name'
              name='userName'
              inputValue={formData.userName}
              setInputValue={handleChange}
              inputPlaceholder='Enter your Username'
              inputType='text'
            />
            <TextField 
              fieldName='First Name'
              name='firstName'
              inputValue= {formData.firstName}
              setInputValue= {handleChange}
              inputPlaceholder= 'Enter your First name'
              inputType= 'text'
            />
            <TextField 
              fieldName='Last Name'
              name='lastName'
              inputValue={formData.lastName}
              setInputValue={handleChange}
              inputPlaceholder='Enter your Last name'
              inputType='text'
            />
            <TextField 
              fieldName='Job Role'
              name='jobRole'
              inputValue={formData.jobRole}
              setInputValue={handleChange}
              inputPlaceholder='Enter the Job Role'
              inputType='text'
            />
            <TextField 
              fieldName='Phone Number'
              name='phoneNo'
              inputValue={formData.phoneNo}
              setInputValue={handleChange}
              inputPlaceholder='Enter your Phone Number'
              inputType='number'
            />
            <TextField 
              fieldName='Email'
              name='email'
              inputValue={formData.email}
              setInputValue={handleChange}
              inputPlaceholder='Enter your Email Id'
              inputType='text'
            />
            <TextField 
              fieldName='Password'
              name='password'
              inputValue={formData.password}
              setInputValue={handleChange}
              inputPlaceholder='Enter the password'
              inputType='password'
            />
            <CustomButton btnText="Create Staff" onClick={createStaff} loading={loading}/>
            
        </div>
      }
    </div>
  )
}

export default CreateStaff