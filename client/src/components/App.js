import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import SuccessPage from './SuccessPage';
import LoginPage from './LoginPage';  // Import LoginPage
import UserHomePage from './UserHomePage';  // Import UserHomePage
import HomePage from './HomePage';  // Import HomePage
//import PublicSchedulePage from './PublicSchedulingPage';
import CalendarPage from './CalendarPage';
import TimeSelectionPage from './TimeSelectionPage';
import FinalizeMeeting from './FinalizeMeeting';  // Import FinalizeMeeting
import '../assets/styles/App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />  {/* Updated to HomePage */}
          <Route path="/register" element={<RegistrationForm />} />  {/* Updated path to /register */}
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<UserHomePage />} />  {/* Updated to UserHomePage */}
          <Route path="/schedule" element={<CalendarPage />} />
          <Route path="/time-selection/:date" element={<TimeSelectionPage />} />
          <Route path="/finalize-meeting" element={<FinalizeMeeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;