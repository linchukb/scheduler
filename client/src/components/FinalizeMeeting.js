import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/FinalizeMeeting.css';  // Import the CSS

function FinalizeMeeting() {
  const location = useLocation();
  const { slot, date } = location.state || {};  // Retrieve the selected slot and date from the state

  return (
    <div className='finalize-meeting-page'>
      <div className='header'></div>
      <h1>Finalize Meeting</h1>
      <p>Selected Date: {date}</p>
      <p>Selected Time Slot: {slot}</p>
      <div className='footer'></div>
    </div>
  );
}

export default FinalizeMeeting;