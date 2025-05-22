import React from 'react'
import './StaffCard.css'
import staff_members from '../../../../assets/images/staff_members.png'
import CustomButton from '../../../CustomButton/CustomButton.jsx'

function StaffCard({staffPosition, name, email, contact, onClick}) {
  return (
    <div className="staff-card">
        <div className="main-div">
            <div className="row-div">
                <div className="col-div1">
                    <img src={staff_members} alt="" />
                    <h3>{staffPosition}</h3>
                </div>
                <div className="col-div2">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Contact No.: {contact}</p>
                </div>
            </div>
            <CustomButton btnText='Delete Staff' isLogout={true} onClick={onClick}/>
        </div>
    </div>
  )
}

export default StaffCard