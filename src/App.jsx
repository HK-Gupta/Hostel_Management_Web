import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Components/AuthComponents/Login/Login'
import Signup from './Components/AuthComponents/Signup/Signup'
import Home from './Components/HomeComponent/Home/Home'
import Navbar from './Components/HomeComponent/Navbar/Navbar'
import RoomAvailable from './Components/HomeComponent/RoomAvailable/RoomAvailable.jsx'
import AllIssues from './Components/HomeComponent/AllIssues/AllIssues.jsx'
import StaffMembers from './Components/HomeComponent/StaffMember/StaffMember.jsx'
import CreateStaff from './Components/HomeComponent/CreateStaff/CreateStaff.jsx'
import HostelFees from './Components/HomeComponent/HostelFees/HostelFees.jsx'
import ChangeRequest from './Components/HomeComponent/ChangeRequest/ChangeRequest.jsx'
import CreateIssue from './Components/HomeComponent/CreateIssue/CreateIssue.jsx'
import RoomChangeRequest from './Components/HomeComponent/RoomAvailable/RoomChangeRequest/RoomChangeRequest.jsx'
import UserProfile from './Components/AuthComponents/UserProfile/UserProfile.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/rooms-available' element={<RoomAvailable/>}/>
        <Route path='/all-issues' element={<AllIssues/>}/>
        <Route path='/staff-members' element={<StaffMembers/>}/>
        <Route path='/create-staff' element={<CreateStaff/>}/>
        <Route path='/hostel-fees' element={<HostelFees/>}/>
        <Route path='/change-room' element={<ChangeRequest/>}/>
        <Route path='/create-issue' element={<CreateIssue/>}/>
        <Route path='/rooms-available/room-change-request' element={<RoomChangeRequest/>}/>
        <Route path='/user-profile' element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}

export default App