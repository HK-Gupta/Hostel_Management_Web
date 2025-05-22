import React from 'react'
import './CustomButton.css'

function CustomButton({btnText, isLogout=false, onClick, loading=false}) {
  return (
    <div className='custom-button'>
      <button 
        className={`${isLogout? 'logout': 'normal'}`} 
        onClick={onClick}
        disabled={loading} >
        {loading ? (
        <span className="spinner"></span> // you can style this or use a loader component
      ) : (btnText)}
      </button>
    </div>
  )
}

export default CustomButton