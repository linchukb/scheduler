import React from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CalendarPage.css';

function CalendarPage() {
  const navigate = useNavigate();

  const onDateClick = (date) => {
    // Navigate to the time selection page with the selected date as a parameter
    navigate(`/time-selection/${date.toISOString().split('T')[0]}`);
  };

  return (
    <div className='calendar-page'>
      <div className='header'></div>
      <Calendar
        locale='en-US'
        onClickDay={onDateClick}
      />
      <div className='footer'></div>
    </div>
  );
}

export default CalendarPage;
