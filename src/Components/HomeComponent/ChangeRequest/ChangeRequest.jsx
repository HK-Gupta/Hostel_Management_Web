import React, {useState, useEffect} from 'react'
import './ChangeRequest.css'
import person from '../../../assets/images/person.png'
import CustomButton from '../../CustomButton/CustomButton.jsx'
import { ApiCalls } from '../../../api/apiCalls.js';
import { API_ENDPOINTS } from '../../../api/apiConstants.js';
import { useNavigate } from 'react-router-dom';
import UserModel from '../../../models/UserModel.js';

function ChangeRequest() {
  const [roomModel, setRoomModel] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = UserModel.fromStorage();

  useEffect(() => {
    ApiCalls.fetchRoomChangeRequests(setRoomModel, setLoading);
  }, []);

  const handleRequest = (message, id) => {
    setLoading(true);
    ApiCalls.deleteFromDatabase(
      API_ENDPOINTS.changeRequest,
      id,
      message,
      navigate,
      setLoading
    );
  } 
  return (
    <div className='all-requests'>
      <h3>All Requests</h3>
      {
        user.authority==0 
        ? <div className="universal">
          <div className="access-message">
            <p className='access-text'>You don't have permission to see these files</p>
          </div>
        </div>
        : loading
        ? <span className="spinner"></span>
        : <div className="request-cards">
          {
            roomModel.map((room, index) => (
              <div className="request-card" key={index}>
                <div className="div-row">
                  <div className="left-col">
                    <img src={person} alt="" />
                    <h4>{`${room.studentData.firstName} ${room.studentData.lastName}`}</h4>
                  </div>
                  <div className="right-col">
                    <p>User Name: {room.studentData.userName}</p>
                    <p>Current Block: {room.currentBlock}</p>
                    <p>Current Room No: {room.currentRoomNumber}</p>
                    <p>Email: {room.studentData.email}</p>
                    <p>Phone No: {room.studentData.phoneNo}</p>
                  </div>
                </div>
                <div className="asked-for">
                  <p className='bold-text'>Asked For:</p>
                  <p className='red-text'>Block: {room.changeBlock}</p>
                  <p className='red-text'>Room: {room.changeRoomNumber}</p>
                </div>
                <div className="reason">
                  <p className='bold-text'>Reason:</p>
                  <p>{room.changeReason}</p>
                </div>
                <div className="two-buttons">
                  <CustomButton btnText='Reject' isLogout={true} onClick={() => handleRequest("Request Rejected" , room.id)}/>
                  <CustomButton btnText='Approve' className='green-btn' onClick={() => handleRequest("Request Accepted" , room.id)}/>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default ChangeRequest