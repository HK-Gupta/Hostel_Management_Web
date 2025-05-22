import React, { Suspense, useState } from 'react'
import './UserProfile.css'
import person from '../../../assets/images/person.png'
import TextField from '../../TextField/TextField.jsx'
import CustomButton from '../../CustomButton/CustomButton.jsx'
import { useNavigate } from 'react-router-dom'
import { ApiCalls } from '../../../api/apiCalls.js'
import UserModel from '../../../models/UserModel.js'

function UserProfile() {
  const navigate = useNavigate();
  const user = UserModel.fromStorage();
  console.log(user);
  const [formData, setFormData] = useState({
          userName: `${user.userName}`,
          firstName: `${user.firstName}`,
          lastName: `${user.lastName}`,
          phoneNo: `${user.phoneNo}`,
          email: `${user.email}`,
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const logoutUser = () => {
    ApiCalls.handleLogout(navigate);
  }


  return (
    <div className='user-profile'>
      <div className="detailed-view">
        <div className="name-image">
          <img src={person} alt="" />
          <h3>{user.userName}</h3>
        </div>
        <div className="room-block-component">
          <div className="room-number">Room No.: {user.roomNumber}</div>
          <div className="block-number">Block No.: {user.blockNumber}</div>
        </div>
        <div className="other-detials">
          <TextField 
            fieldName=''
            name='email'
            inputValue={formData.email}
            setInputValue={handleChange}
            inputPlaceholder={''}
            inputType='text'
            readOnly={true}
          />       
          <TextField 
            fieldName=''
            name='userName'
            inputValue={formData.userName}
            setInputValue={handleChange}
            inputPlaceholder={'Enter User Name'}
            inputType='text'
            readOnly={true}
          />
          <TextField 
            fieldName=''
            name='phoneNo'
            inputValue={formData.phoneNo}
            setInputValue={handleChange}
            inputPlaceholder={"Enter your contact number"}
            inputType='number'
          />   
            <TextField 
              fieldName=''
              name='firstName'
              inputValue={formData.firstName}
              setInputValue={handleChange}
              inputPlaceholder={'Enter First Name'}
              inputType='text'
            />
            <TextField 
              fieldName=''
              name='lastName'
              inputValue={formData.lastName}
              setInputValue={handleChange}
              inputPlaceholder={"Enter Last name"}
              inputType='text'
            />   
          <div className="save-logout">
            <CustomButton btnText="Logout" isLogout={true} onClick={logoutUser}/>
            <CustomButton btnText="Save"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile