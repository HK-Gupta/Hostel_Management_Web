import React, {useState, useEffect} from 'react'
import './RoomAvailable.css'
import room_available from '../../../assets/images/room_available.png'
import {useNavigate} from 'react-router-dom'
import {ApiCalls} from '../../../api/apiCalls'
import UserModel from '../../../models/UserModel';

function RoomAvailable() {
    const navigate = useNavigate();
    const [roomModel, setRoomModel] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      ApiCalls.fetchRoomAvailabilityDetails(setRoomModel, setLoading);
    }, []);
  return (
    <div className='rooms-available'>
      {
        loading
        ? <span className="spinner"></span>
        : <div className='list-rooms'>
          { roomModel.map((room, index) =>  (
            <div className="each-room" key={index}>
              <div className="left-part">
                <img src={room_available} alt="" />
              </div>
              <div className="middle-part">
                <p>Room No.: {room.roomNumber}</p>
                <p>Block:  {room.blockNumber}</p>
                <p>Capacity: {room.roomCapacity}</p>
              </div>
              <div className="right-part">
                <p>Current Capacity: {room.roomCurrentCapacity}</p>
                <p>Room Type: {room.roomType}</p>
                <div className="status">
                  <p>Status:</p>
                  <div 
                    className='current-status' 
                    onClick={() => {
                      navigate('room-change-request', {
                        state: {
                          roomNumber: room.roomNumber,
                          blockNumber: room.blockNumber
                        }
                      })
                    }}
                    >{room.roomStatus}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default RoomAvailable