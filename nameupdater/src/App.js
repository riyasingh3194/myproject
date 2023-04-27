import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
    event.target.reset();
  };

  return (
    <div className="container">
      <h1>Welcome, {name ? name : "****"}!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" name="name" placeholder="Your name here..." onChange={handleNameChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
