import React, { useState } from 'react'
import './RoomChangeRequest.css';
import TextField from '../../../TextField/TextField'
import CustomButton from '../../../CustomButton/CustomButton';

function RoomChangeRequest() {
    const [reason, setReason] = useState('');
  return (
    <div className='room-change-request'>
        <div className="request-form">
            <h3>Room Change Request</h3>
            <div className="column-component">
                <p>Current Block & Room No.</p>
                <div className="room-block-component">
                    <div className="room-number">Room No.:</div>
                    <div className="block-number">Block No.:</div>
                </div>
                <p>Shift to Block & Room No.</p>
                <div className="room-block-component">
                    <div className="room-number">Room No.:</div>
                    <div className="block-number">Block No.:</div>
                </div>
                <TextField
                    fieldName='Reason for change'
                    inputValue={reason}
                    setInputValue={setReason}
                    inputPlaceholder={"Enter the reason to change the room"}
                    inputType='text'
                />
                <CustomButton btnText='Submit Request'/>
            </div>
        </div>
    </div>
  )
}

export default RoomChangeRequest