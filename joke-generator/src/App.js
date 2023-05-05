import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokeDelivery, setJokeDelivery] = useState("");

  async function fetchData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    console.log(data);
    
    setJokeDelivery("");
    if (data.type === "twopart") {
      setJokeSetup(data.setup);
      setTimeout(() => {
        setJokeDelivery(data.delivery);
      }, 3000)
    } else {
      setJokeSetup(data.joke);
    }
  }

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <div>
        <p>{jokeSetup}</p>
        <p>{jokeDelivery}</p>
      </div>
      <button onClick={() => fetchData()}>Get the Joke</button>
    </div>
  );
}

export default App;
