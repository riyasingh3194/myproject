import React, { useRef } from 'react';

function App() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log(`You selected ${file.name}`);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <button onClick={handleButtonClick}>Pick a file</button>
    </div>
  );
}
export default App;