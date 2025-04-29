import React from 'react'
import './Category.css'
import {useNavigate} from 'react-router-dom'

function Category({image, text, route}) {
  const navigate = useNavigate();
  return (
    <div className='category' onClick={() => navigate(route)}>
      <div className="category-col">
        <img src={image} alt={text} />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Category