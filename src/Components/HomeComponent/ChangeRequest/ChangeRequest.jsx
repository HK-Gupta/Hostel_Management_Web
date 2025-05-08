import React from 'react'
import './ChangeRequest.css'
import person from '../../../assets/images/person.png'
import CustomButton from '../../CustomButton/CustomButton.jsx'

function ChangeRequest() {
  return (
    <div className='all-requests'>
      <h3>All Requests</h3>
      <div className="request-cards">
        <div className="request-card">
          <div className="div-row">
            <div className="left-col">
              <img src={person} alt="" />
              <h4>User Name</h4>
            </div>
            <div className="right-col">
              <p>User Name: xyz11</p>
              <p>Current Block: 100</p>
              <p>Current Room Number: 100</p>
              <p>Email: abc@gmail.com</p>
              <p>Phone No.: 1234567890</p>
            </div>
          </div>
          <div className="asked-for">
            <p className='bold-text'>Asked For:</p>
            <p className='red-text'>Block: A</p>
            <p className='red-text'>Room: 101</p>
          </div>
          <div className="reason">
            <p className='bold-text'>Reason:</p>
            <p>Fans are not working</p>
          </div>
          <div className="two-buttons">
            <CustomButton btnText='Reject' isLogout={true}/>
            <CustomButton btnText='Approve' className='green-btn'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeRequest