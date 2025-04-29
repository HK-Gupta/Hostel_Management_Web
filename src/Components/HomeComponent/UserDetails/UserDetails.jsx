import React from 'react'
import './UserDetails.css'
import { AiFillFileAdd } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'

function UserDetails() {
    const navigate = useNavigate();
  return (
    <div className='user-details'>
        <div className="partitions">
            <div className="left-part">
                <div className="user-name">
                    <p>USER NAME</p>
                </div>
                <div className='block-room-no'>
                    <p>Block No.: </p>
                    <p>Room No.: </p>
                </div>
            </div>
            <div className="right-part">
                <div className="create-issue" onClick={()=> {navigate('create-issue')}}>
                    <AiFillFileAdd className='icon-img'/>
                </div>
                <p>Create Issue</p>
            </div>
        </div>
    </div>
  )
}

export default UserDetails