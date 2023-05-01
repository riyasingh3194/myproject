import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.src = imageUrl;
  }, [imageUrl]);

  const handleButtonClick = () => {
    // Generate a random image URL
    const newImageUrl = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 1000
    )}`;

    setImageUrl(newImageUrl);
  };

  return (
    <div>
      <img
        ref={imageRef}
        style={{ width: 200, height: 300 }}
        alt="Random Image"
      />
      <button onClick={handleButtonClick}>Change Image</button>
    </div>
  );
}


export default App;
