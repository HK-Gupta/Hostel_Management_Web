import React from 'react'
import './StaffCard.css'
import staff_members from '../../../../assets/images/staff_members.png'
import CustomButton from '../../../CustomButton/CustomButton.jsx'

function StaffCard() {
  return (
    <div className="staff-card">
        <div className="main-div">
            <div className="row-div">
                <div className="col-div1">
                    <img src={staff_members} alt="" />
                    <h3>Staff Position</h3>
                </div>
                <div className="col-div2">
                    <p>Name: Xyz Kr</p>
                    <p>Email: xyz@gmaiol.com</p>
                    <p>Contact No.: 123456789</p>
                </div>
            </div>
            <CustomButton btnText='Delete Staff' isLogout={true}/>
        </div>
    </div>
  )
}

export default StaffCard