import React from 'react';
import './IssueDropDown.css';

function IssueDropDown({ issues, selectedIssue, handleIssueChange }) {
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
          <option value="" disabled>
            Select Issue
          </option>
          {
            issues.map((issue) => (
              <option value={issue} key={issue}>
                {issue}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default IssueDropDown;
