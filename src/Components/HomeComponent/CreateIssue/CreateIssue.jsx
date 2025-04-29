import React, { useState } from 'react'
import './CreateIssue.css'
import TextField from '../../TextField/TextField.jsx'
import IssueDropDown from './IssueDropDown/IssueDropDown.jsx';
import CustomButton from '../../CustomButton/CustomButton.jsx';

function CreateIssue() {
  const [userRoomNumber, setUserRoomNumber]= useState('');
  const [userBlockNumber, setUserBlockNumber]= useState('');
  const [userEmail, setUserEmail]= useState('');
  const [userPhoneNumber, setUserPhoneNumber]= useState('');
  const [userComment, setUserComment]= useState('');


  return (
    <div className='create-issue'>
      <div className='issue-div'>
      <p className='issue-text'>Create Issue</p>
      </div>
      <div className='form'>
            <TextField 
                  fieldName = 'Room Number' 
                  inputType='text'
                  inputValue = {userRoomNumber} 
                  setInputValue = {setUserRoomNumber} 
                  inputPlaceholder = 'Enter your Room Number'
            />
            <TextField 
                  fieldName = 'Block Number' 
                  inputType='text'
                  inputValue = {userBlockNumber} 
                  setInputValue = {setUserBlockNumber} 
                  inputPlaceholder = 'Enter your Block Number'
            />
            <TextField 
                  fieldName = 'Email Id' 
                  inputType='text'
                  inputValue = {userEmail} 
                  setInputValue = {setUserEmail} 
                  inputPlaceholder = 'Enter your Email Id'
            />
            <TextField 
                  fieldName = 'Phone Number' 
                  inputType='text'
                  inputValue = {userPhoneNumber} 
                  setInputValue = {setUserPhoneNumber} 
                  inputPlaceholder = 'Enter your Phone Number'
            />
            <IssueDropDown/>
            <TextField 
                  fieldName = 'Comments' 
                  inputType='text'
                  inputValue = {userComment} 
                  setInputValue = {setUserComment} 
                  inputPlaceholder = 'Describe your issue'
            />

            <CustomButton btnText={"Submit"}/>
         </div>
    </div>
  )
}

export default CreateIssue