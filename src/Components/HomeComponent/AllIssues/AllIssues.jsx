import React, {useState, useEffect} from 'react'
import './AllIssues.css'
import person from '../../../assets/images/person.png'
import CustomButton from '../../CustomButton/CustomButton.jsx'
import { ApiCalls } from '../../../api/apiCalls.js';
import { API_ENDPOINTS } from '../../../api/apiConstants.js';
import { useNavigate } from 'react-router-dom';
import UserModel from '../../../models/UserModel.js';

function AllIssues() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);
  const user = UserModel.fromStorage();

  useEffect(() => {
    setLoading(true);
    ApiCalls.fetchAllIssues(setIssues, setLoading);
    console.log(user.authority);
  }, []);

  const resolveIssue = (id) => {
    setLoading(true)
    ApiCalls.deleteFromDatabase(
      API_ENDPOINTS.createIssues,
      id,
      'Issue resolved successfully',
      navigate,
      setLoading
    )
  } 

  return (
    <div className='all-issues'>
      <h3>All Issues</h3>
      {
        user.authority==0 
        ? <div className="universal">
          <div className="access-message">
            <p className='access-text'>You don't have permission to see these files</p>
          </div>
        </div>
        : loading 
        ? <span className="spinner"></span>
        : <div className="issue-cards">
          {issues.map((issue, index) => (
              <div className="issue-card" key={index}>
              <div className="div-row">
                <div className="left-col">
                  <img src={person} alt="" />
                  <h4>{`${issue.firstName} ${issue.lastName}`}</h4>
                </div>
                <div className="right-col">
                  <p>User Name: {issue.userName}</p>
                  <p>Room Number: {issue.roomNumber}</p>
                  <p>Email: {issue.email}</p>
                  <p>Phone No: {issue.phoneNo}</p>
                </div>
              </div>
              <div className="comment-issue-row">
                <p className='bold-p'>Issue: </p>
                <p>{issue.issue}</p>
              </div>
              <div className="comment-issue-row">
                <p className='bold-p'>Comment: </p>
                <p>{issue.comment}</p>
              </div>
              <CustomButton btnText="Resolved" onClick={() => resolveIssue(issue.id)}/>
            </div>
          ))
        }
        </div>
      }
    </div>
  )
}

export default AllIssues