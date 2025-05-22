import React, { useState } from 'react'
import './CreateIssue.css'
import TextField from '../../TextField/TextField.jsx'
import IssueDropDown from './IssueDropDown/IssueDropDown.jsx';
import CustomButton from '../../CustomButton/CustomButton.jsx';
import UserModel from '../../../models/UserModel.js';
import { ApiCalls } from '../../../api/apiCalls.js';
import { useNavigate } from 'react-router-dom';

function CreateIssue() {
  const user = UserModel.fromStorage();
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState('');
  const [loading, setLoading] = useState(false);
    const issueList = [
        'Bedroom', 'Bathroom', 'Water', 'Kitchen', 'Furniture', 'Light', 'others'
    ];

    const handleIssueChange = (e) =>{
      setSelectedIssue(e.target.value);
    }

  const [formData, setFormData] = useState({
      comment: ''    
  });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const createIssue= () => {
      setLoading(true);
      const data = {
            "roomNumber": user.roomNumber,
            "blockNumber": user.blockNumber,
            "userName": user.userName,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "phoneNo": user.phoneNo,
            "issue": selectedIssue,
            "comment": formData.comment
      }
      ApiCalls.createIssues(data, navigate, setLoading)
    }

  return (
    <div className='create-issue'>
      <div className='issue-div'>
            <p className='issue-text'>Create Issue</p>
      </div>
      {
            loading
            ? <div className='progress'>
                  <span className='spinner'></span>
              </div>
            : <div className='form'>
            <TextField 
                  fieldName = 'Room Number' 
                  inputType='text'
                  inputValue = {user.roomNumber} 
                  // setInputValue = {()={}} 
                  inputPlaceholder = 'Enter your Room Number'
                  readOnly={true}
            />
            <TextField 
                  fieldName = 'Block Number' 
                  inputType='text'
                  inputValue = {user.blockNumber} 
                  // setInputValue = {setUserBlockNumber} 
                  inputPlaceholder = 'Enter your Block Number'
                  readOnly={true}
            />
            <TextField 
                  fieldName = 'Email Id' 
                  inputType='text'
                  inputValue = {user.email} 
                  // setInputValue = {setUserEmail} 
                  inputPlaceholder = 'Enter your Email Id'
                  readOnly={true}
            />
            <TextField 
                  fieldName = 'Phone Number' 
                  inputType='text'
                  inputValue = {user.phoneNo} 
                  // setInputValue = {setUserPhoneNumber} 
                  inputPlaceholder = 'Enter your Phone Number'
                  readOnly={true}
            />
            <IssueDropDown
                  issues={issueList}
                  selectedIssue={selectedIssue}
                  setSelectedIssue={setSelectedIssue}
                  handleIssueChange={handleIssueChange}
            />
            <TextField 
                  fieldName = 'Comments' 
                  inputType='text'
                  name='comment'
                  inputValue = {formData.comment} 
                  setInputValue = {handleChange} 
                  inputPlaceholder = 'Describe your issue'
            />

            <CustomButton btnText={"Submit"} onClick={createIssue}/>
         </div>
      }
    </div>
  )
}

export default CreateIssue