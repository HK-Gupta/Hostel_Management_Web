import React from 'react'
import './AllIssues.css'
import person from '../../../assets/images/person.png'
import CustomButton from '../../CustomButton/CustomButton.jsx'

function AllIssues() {
  return (
    <div className='all-issues'>
      <h3>All Issues</h3>
      <div className="issue-cards">
        <div className="issue-card">
          <div className="div-row">
            <div className="left-col">
              <img src={person} alt="" />
              <h4>User Name</h4>
            </div>
            <div className="right-col">
              <p>User Name: xyz11</p>
              <p>Room Number: 100</p>
              <p>Email: abc@gmail.com</p>
              <p>Phone No.: 1234567890</p>
            </div>
          </div>
          <div className="comment-issue-row">
            <p className='bold-p'>Issue: </p>
            <p>XYZ</p>
          </div>
          <div className="comment-issue-row">
            <p className='bold-p'>Comment: </p>
            <p>XYZ</p>
          </div>
          <CustomButton btnText="Resolved"/>
        </div>
      </div>
    </div>
  )
}

export default AllIssues