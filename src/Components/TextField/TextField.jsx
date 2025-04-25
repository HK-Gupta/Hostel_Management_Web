import React from 'react'
import './TextField.css'

function TextField({fieldName, inputValue, setInputValue, inputPlaceholder, inputType}) {
  return (
    <div className='text-field'>
        <p>{fieldName}</p>
        <input 
            className='input-text'
            type={inputType}
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={inputPlaceholder} 
        />
    </div>
  )
}

export default TextField