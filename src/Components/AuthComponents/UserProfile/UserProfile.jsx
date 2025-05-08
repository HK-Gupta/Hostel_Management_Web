import React, { Suspense, useState } from 'react'
import './UserProfile.css'
import person from '../../../assets/images/person.png'
import TextField from '../../TextField/TextField.jsx'
import CustomButton from '../../CustomButton/CustomButton.jsx'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { ApiCalls } from '../../../api/apiCalls.js'

function UserProfile() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const logoutUser = () => {
    ApiCalls.handleLogout(navigate);
  }

  return (
    <div className='user-profile'>
      <div className="detailed-view">
        <div className="name-image">
          <img src={person} alt="" />
          <h3>User Name</h3>
        </div>
        <div className="room-block-component">
          <div className="room-number">Room No.:</div>
          <div className="block-number">Block No.:</div>
        </div>
        <div className="other-detials">
          <TextField 
            fieldName=''
            inputValue={userEmail}
            setInputValue={setUserEmail}
            inputPlaceholder={''}
            inputType='text'
          />       
          <TextField 
            fieldName=''
            inputValue={userName}
            setInputValue={setUserName}
            inputPlaceholder={'Enter User Name'}
            inputType='text'
          />
          <TextField 
            fieldName=''
            inputValue={phoneNumber}
            setInputValue={setPhoneNumber}
            inputPlaceholder={"Enter your contact number"}
            inputType='number'
          />   
            <TextField 
              fieldName=''
              inputValue={firstName}
              setInputValue={setFirstName}
              inputPlaceholder={'Enter First Name'}
              inputType='text'
            />
            <TextField 
              fieldName=''
              inputValue={lastName}
              setInputValue={setLastName}
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