import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    }
    fetchDogImage();
  }, []);

  function handleButtonClick() {
    async function fetchNewDogImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    }
    fetchNewDogImage();
  }

  return (
    <div>
      <img src={imageUrl} alt="dog" />
      <button onClick={handleButtonClick}>New Dog Image</button>
    </div>
  );
}

export default App;
