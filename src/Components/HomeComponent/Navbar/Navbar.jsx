import React from 'react'
import './Navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import person from '../../../assets/images/person.png'
import {useNavigate, useLocation} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    if (location.pathname !== '/user-profile') {
      navigate('/user-profile');
    }
  };


  return (
    <div className="navbar">
        <div className="left">
            <FiAlignJustify className='left-icon'/>
            <p className='dashboard-name'>My Hostel</p>
        </div>
        <div className="right" onClick={handleProfileClick}>
            <img src={person} alt="" />
        </div>
    </div>
  )
}

export default Navbar