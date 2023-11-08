import React from 'react';
import '../assets/styles/PublicSchedulingPage.css';

function PublicSchedulePage() {
  return (
    <div className='public-schedule-page'>
      <header className='header'>Schedule a Meeting</header>
      <section className='schedule-form'>
        {/* Form for scheduling a meeting */}
        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='date'>Date:</label>
          <input type='date' id='date' name='date' required />

          <label htmlFor='time'>Time:</label>
          <input type='time' id='time' name='time' required />

          <button type='submit'>Schedule</button>
        </form>
      </section>
      <footer className='footer'></footer>
    </div>
  );
}

export default PublicSchedulePage;
