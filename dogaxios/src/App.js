import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchDogImage();
  }, []);

  async function fetchDogImage() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImageUrl(response.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchNewDogImage() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImageUrl(response.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img src={imageUrl} alt="dog" />
      <button onClick={fetchNewDogImage}>New Dog Image</button>
    </div>
  );
}

export default App;
