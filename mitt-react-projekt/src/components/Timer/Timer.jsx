import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleReset() {
    setSeconds(5);
    setIsRunning(false);
  }

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval) + console.log("yes");
  }, [isRunning, seconds]);

  return (
    <div>
      <h1>{seconds} sekunder kvar</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pausa" : "Starta"}
      </button>
      <button onClick={handleReset}>Nollställ</button>
    </div>
  );
}

export default Timer;