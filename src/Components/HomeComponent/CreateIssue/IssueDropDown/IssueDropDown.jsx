import React, { useState } from 'react'
import './IssueDropDown.css'

function IssueDropDown() {
    const [selectedIssue, setSelectedIssue] = useState('');
    const issues = [
        'Bedroom', 'Bathroom', 'Water', 'Kitchen', 'Furniture', 'Light', 'others'
    ];

    const handleIssueChange = (e) =>{
      setSelectedIssue(e.target.value);
    }
  return (
    <div className='issue-dd'>
        <div className='dd'>
            <span className='text'>
              Issue you are Facing.
            </span>
            <select 
              value={selectedIssue}
              onChange={handleIssueChange}
              className='dropdown'
              >
              {
                issues.map((issue) => {

                  return <option value={issue} key={issue}>
                    {issue}
                  </option>
                })
              } 

            </select>
          </div>
    </div>
  )
}

export default IssueDropDown