import { useState, useEffect } from "react";
import "./Timer.css"

function Timer() {
  const [milliseconds, setMilliseconds] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [hours, setHours] = useState(0)
  const [timerToggle, setTimerToggle] = useState(false);

  const time = {
    hours: Math.floor(milliseconds / 3600000),
    minutes: Math.floor(milliseconds / 60000)%60,
    seconds: Math.floor(milliseconds / 1000)%60, // 10*10
    milliseconds: milliseconds
  }

  const resetTimer = () => {
    setTimerToggle(false)
    setMilliseconds(0)
  }

  // TOGGLE TIMER
  useEffect(() => {
    console.log("runs")

    if (timerToggle === true) {
      //every "interval" gets an id when using SetInterval
      const intervalId = setInterval(() => {
        setMilliseconds(prev => prev + 100);
      }, 100) // updating every 1ms made it slow, so 100ms instead

      // removes the previous interval, so only 1 interval runs
      return () => {
        console.log("return")
        clearInterval(intervalId)
      }
    } 

    console.log("efter if")

  }, [timerToggle])

  // insert use effect here for timerToggle

  return (
    <>
      <div className="time-display">{`${time.hours}h : ${time.minutes}min : ${time.seconds}s`}</div>
      <div className="buttons">
        <button onClick={() => setTimerToggle(true)}>Start</button>
        <button onClick={() => setTimerToggle(false)}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  )
}

export default Timer;