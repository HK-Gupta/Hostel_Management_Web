import React, { useEffect, useState } from 'react'
import './StaffMember.css'
import StaffCard from './StaffCard/StaffCard'
import { useNavigate } from 'react-router-dom'
import { ApiCalls } from '../../../api/apiCalls';
import { API_ENDPOINTS } from '../../../api/apiConstants';
import UserModel from '../../../models/UserModel';

function StaffMember() {
  const navigate = useNavigate();
  const [staffModel, setStaffModel] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = UserModel.fromStorage();

  useEffect(() => {
    setLoading(true);
    ApiCalls.getAllStaff(setStaffModel, setLoading);
  }, [])

  const handleDelete = (id) => {
    setLoading(true)
    ApiCalls.deleteFromDatabase(
      API_ENDPOINTS.createStaff,
      id,
      'Staff removed successfully',
      navigate,
      setLoading
    )
  }

  return (
    <div className="staff-members">
      {
        user.authority==0 
        ? <div className="universal">
          <div className="access-message">
            <p className='access-text'>You don't have permission to see these files</p>
          </div>
        </div>
        : loading 
        ? <div className='center'>
            <span className='spinner'></span>
          </div>
        : <div className='staff-grid-container'>
          {staffModel.map((staff, index) => (
            <StaffCard className='staff-card'
              key={index}
              staffPosition={staff.jobRole}
              name={`${staff.firstName} ${staff.lastName}`}
              email={staff.email}
              contact={staff.phoneNo}
              onClick={() => handleDelete(staff.id)}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default StaffMember