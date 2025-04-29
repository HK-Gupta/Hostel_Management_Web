import React from 'react'
import './StaffMember.css'
import StaffCard from './StaffCard/StaffCard'

function StaffMember() {
  return (
    <div className='staff-members'>
      <div className="column-staffs">
        <div className="row-staff">
          <StaffCard/>   
          <StaffCard/>   
        </div>
      </div>
    </div>
  )
}

export default StaffMember