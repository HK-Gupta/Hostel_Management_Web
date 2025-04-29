import React from 'react'
import './Categories.css'
import Category from './Category/Category.jsx'
import room_availability from '../../../assets/images/room_available.png'
import all_issue from '../../../assets/images/all_issues.png'
import staff_members from '../../../assets/images/staff_members.png'
import create_staff from '../../../assets/images/create_staff.png'
import hostel_fees from '../../../assets/images/hostel_fees.png'
import change_request from '../../../assets/images/change_request.png'


function Categories() {

  return (
    <div className='categories'>
        <p>Categoies</p>
        <div className="categories-row">
          <Category image={room_availability} text={'Rooms Availability'} route={"rooms-available"}/>
          <Category image={all_issue} text={'All Issues'} route={"all-issues"}/>
          <Category image={staff_members} text={'Staff Members'} route={"staff-members"}/>
          <Category image={create_staff} text={'Create Staff'} route={"create-staff"}/>
          <Category image={hostel_fees} text={'Hostel Fees'} route={"hostel-fees"}/>
          <Category image={change_request} text={'Change Request'} route={"change-room"}/>
        </div>
    </div>
  )
}

export default Categories