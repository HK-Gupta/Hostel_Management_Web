import React from 'react'
import './UserDetails.css'
import { AiFillFileAdd } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'
import UserModel from '../../../models/UserModel.js'

function UserDetails() {
    const navigate = useNavigate();
    const user = UserModel.fromStorage();

  return ( 
    <div className='user-details'>
        <div className="partitions">
            <div className="left-part">
                <div className="user-name">
                    <p>{user.firstName} {user.lastName}</p>
                </div>
                <div className='block-room-no'>
                    <p>Block No: {user.blockNumber}</p>
                    <p>Room No: {user.roomNumber}</p>
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