import { useState, useEffect } from "react";


function Timer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [timerToggle, setTimerToggle] = useState(false)

  // always run this? and then inside the TimerToggle will decide
  const runTimer = () => {
    setCurrentTime(currentTime => currentTime + 1);
  }

  const startTimer = () => {
    
  }

  const stopTimer = () => {

  }

  const resetTimer = () => {

  }

  // insert use effect here for timerToggle

  return (
    <>
      <div className="time-display">{currentTime}</div>
      <div className="buttons">
        <button onClick={runTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  )
}







export default Timer;