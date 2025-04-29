import React from 'react'
import './RoomAvailable.css'
import room_available from '../../../assets/images/room_available.png'
import {useNavigate} from 'react-router-dom'

function RoomAvailable() {
  const navigate = useNavigate();

  return (
    <div className='rooms-available'>
      <div className='list-rooms'>
        <div className="each-room">
          <div className="left-part">
            <img src={room_available} alt="" />
          </div>
          <div className="middle-part">
            <p>Room No.: X</p>
            <p>Block:  A</p>
            <p>Capacity: 4</p>
          </div>
          <div className="right-part">
            <p>Current Capacity: 0</p>
            <p>Room Type: single</p>
            <div className="status">
              <p>Status:</p>
              <div className='current-status' onClick={() => {navigate('room-change-request')}}>Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomAvailable