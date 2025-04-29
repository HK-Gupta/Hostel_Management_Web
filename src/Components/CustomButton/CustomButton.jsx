import React from 'react'
import './CustomButton.css'

function CustomButton({btnText, isLogout=false, onClick}) {
  return (
    <div className='custom-button'>
      <button className={`${isLogout? 'logout': 'normal'}`} onClick={onClick}>
        {btnText}
      </button>
    </div>
  )
}

export default CustomButton