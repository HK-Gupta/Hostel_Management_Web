import React from 'react'
import './TextField.css'

function TextField({fieldName, inputValue, setInputValue, inputPlaceholder, inputType, name, readOnly=false}) {
  return (
    <div className='text-field'>
        <p>{fieldName}</p>
        <input 
            className='input-text'
            type={inputType}
            name={name}
            value={inputValue} 
            onChange={setInputValue}
            placeholder={inputPlaceholder} 
            readOnly = {readOnly}
        />
    </div>
  )
}

export default TextField