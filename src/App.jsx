import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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
import Otp from './Components/AuthComponents/OTP/Otp.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} />
        <Route path="/otp" element={<Otp />} />

        {/* Protected routes */}
        <Route path="/rooms-available" element={isAuthenticated ? <RoomAvailable /> : <Navigate to="/login" />} />
        <Route path="/all-issues" element={isAuthenticated ? <AllIssues /> : <Navigate to="/login" />} />
        <Route path="/staff-members" element={isAuthenticated ? <StaffMembers /> : <Navigate to="/login" />} />
        <Route path="/create-staff" element={isAuthenticated ? <CreateStaff /> : <Navigate to="/login" />} />
        <Route path="/hostel-fees" element={isAuthenticated ? <HostelFees /> : <Navigate to="/login" />} />
        <Route path="/change-room" element={isAuthenticated ? <ChangeRequest /> : <Navigate to="/login" />} />
        <Route path="/create-issue" element={isAuthenticated ? <CreateIssue /> : <Navigate to="/login" />} />
        <Route path="/rooms-available/room-change-request" element={isAuthenticated ? <RoomChangeRequest /> : <Navigate to="/login" />} />
        <Route path="/user-profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
