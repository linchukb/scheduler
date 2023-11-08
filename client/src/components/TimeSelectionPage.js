// src/components/TimeSelectionPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import Select from 'react-select';
import '../assets/styles/TimeSelectionPage.css';

function TimeSelectionPage() {
  const { date } = useParams();  // Retrieve the selected date from the URL parameters
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const navigate = useNavigate();  // Create a navigate function

  const durationOptions = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 45, label: '45 minutes' },
    { value: 60, label: '60 minutes' },
    { value: 90, label: '90 minutes' },
  ];

  useEffect(() => {
    // Assume fetchAvailableSlots is a function that fetches available slots based on selected duration
    // Replace with your actual logic to fetch or calculate available slots
    const fetchAvailableSlots = async (duration) => {
      // ... fetching or calculating logic
      return ['09:00 - 09:15', '09:30 - 09:45', '10:00 - 10:15']; // example slots
    };

    if (selectedDuration) {
      fetchAvailableSlots(selectedDuration.value).then(slots => {
        setAvailableSlots(slots);
      });
    }
  }, [selectedDuration]);

  const handleSlotClick = (slot) => {
    // Navigate to the FinalizeMeeting page, passing the selected slot and date as state
    navigate('/finalize-meeting', { state: { slot, date } });
  };

  return (
    <div className='time-selection-page'>
        <div className='header'></div>
        <div className='content'>
            <div className='left-panel'>
                <h1>Select a time on {date}</h1>
                <Select
                    options={durationOptions}
                    onChange={setSelectedDuration}
                    placeholder="Select duration..."
                />
            </div>
            {selectedDuration && (
                <div className='right-panel'>
                    <h2>Available Slots:</h2>
                    <div className='slots'>
                        {availableSlots.map((slot, index) => (
                            <div key={index} className='slot' onClick={() => handleSlotClick(slot)}>
                                {slot}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div className='footer'></div>
    </div>
);
}

export default TimeSelectionPage;
