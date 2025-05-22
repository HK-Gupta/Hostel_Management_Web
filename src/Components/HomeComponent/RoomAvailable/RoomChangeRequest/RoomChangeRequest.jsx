import React, { useState } from 'react'
import './RoomChangeRequest.css';
import TextField from '../../../TextField/TextField'
import CustomButton from '../../../CustomButton/CustomButton';
import {useLocation, useNavigate} from 'react-router-dom'
import UserModel from '../../../../models/UserModel';
import { ApiCalls } from '../../../../api/apiCalls';

function RoomChangeRequest() {
    const location = useLocation();
    const navigate = useNavigate();
    const { roomNumber, blockNumber } = location.state || {};   
    const [loading, setLoading] = useState(false);
    const user = UserModel.fromStorage();
    const [formData, setFormData] = useState({
        reason: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const submitChangeRequest = () => {
        setLoading(true);
        const data = {
            "currentRoomNumber": user.roomNumber,
            "changeRoomNumber": roomNumber,
            "currentBlock": user.blockNumber,
            "changeBlock": blockNumber,
            "studentEmailId": user.email,
            "changeReason": formData.reason
        }
        console.log("Data being sent:", data); // 👈 Add this
        ApiCalls.createRoomChangeRequest(data, navigate, setLoading)
    }
 
  return (
    <div className='room-change-request'>
        {
            loading
            ? <span className="spinner"></span>
            : <div className="request-form">
                <h3>Room Change Request</h3>
                <div className="column-component">
                    <p>Current Block & Room No.</p>
                    <div className="room-block-component">
                        <div className="room-number">Room No.: {user.roomNumber}</div>
                        <div className="block-number">Block No.: {user.blockNumber}</div>
                    </div>
                    <p>Shift to Block & Room No.</p>
                    <div className="room-block-component">
                        <div className="room-number">Room No.: {roomNumber}</div>
                        <div className="block-number">Block No.: {blockNumber}</div>
                    </div>
                    <TextField
                        fieldName='Reason for change'
                        inputValue={formData.reason}
                        name='reason'
                        setInputValue={handleChange}
                        inputPlaceholder={"Enter the reason to change the room"}
                        inputType='text'
                    />
                    <CustomButton btnText='Submit Request' onClick={submitChangeRequest}/>
                </div>
            </div>
        }
    </div>
  )
}

export default RoomChangeRequest