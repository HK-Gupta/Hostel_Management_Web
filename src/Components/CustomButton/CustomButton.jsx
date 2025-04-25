import React from 'react'
import './CustomButton.css'

function CustomButton({btnText}) {
  return (
    <div className='custom-button'>
      <button>
        {btnText}
      </button>
    </div>
  )
}

export default CustomButton