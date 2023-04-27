import React, { useState } from "react";

function App() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    setCount(count + 1);

    if (guess < luckyNumber) {
      alert("You guessed a smaller number.");
    } else if (guess > luckyNumber) {
      alert("You guessed a bigger number.");
    } else {
      alert(`Congratulations, you guessed the right number in ${count} attempts!`);
      setLuckyNumber(Math.floor(Math.random() * 100) + 1);
      setCount(0);
    }
    setGuess("");
  };

  return (
    <div>
      <h1>Guess the Lucky Number</h1>
      <form onSubmit={handleGuessSubmit}>
        <label>
          Enter a number between 1 and 100:
          <input type="number" value={guess} onChange={handleGuessChange} />
        </label>
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default App;













