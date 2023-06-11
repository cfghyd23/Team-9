import React, { useState } from 'react';

const HospitalRegistration = () => {
  const [zipcode, setZipcode] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [units, setUnits] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Process the form data, e.g., send it to the backend API

    // Clear the form fields after submission
    setZipcode('');
    setBloodGroup('');
    setUnits('');
  };

  return (
    <div>
      <h2>Hospital Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="units">Number of Units:</label>
          <input
            type="text"
            id="units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default HospitalRegistration;
