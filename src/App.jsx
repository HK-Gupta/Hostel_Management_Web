import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Components/AuthComponents/Login/Login'
import TextField from './Components/TextField/TextField'
import Signup from './Components/AuthComponents/Signup/Signup'
import Home from './Components/HomeComponent/Home/Home'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App