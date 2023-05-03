import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  }

  const handleGenerateOTP = () => {
    const apiEndpoint = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';
    const body = { mobile: parseInt(mobile) };

    // Validate the mobile number
    const validMobileNumber = /^[6-9]\d{9}$/;
    if (!validMobileNumber.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    axios.post(apiEndpoint, body)
      .then(response => {
        setMobile('');
        setError('');
        console.log("Generated otp on your no")
        // Handle the response from the API
        // If the response is successful, clear the input
        // If the response is not successful, show an error message on screen
      })
      .catch(error => {
        console.error(error);
        setError('Error calling API');
      });
  }

  return (
    <div>
      <label htmlFor="mobile">Mobile Number:</label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={mobile}
        onChange={handleMobileChange}
      />
      <button onClick={handleGenerateOTP}>Generate OTP</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
