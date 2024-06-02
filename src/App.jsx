import React, { useState, useEffect } from "react";
// import "./App.css";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setTimeLeft(minutes * 60 + seconds);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <h1>Countdown Timer</h1>
      <TimerInput setMinutes={setMinutes} setSeconds={setSeconds} />
      <TimerControls
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
        isRunning={isRunning}
      />
      <TimerDisplay timeLeft={formatTime(timeLeft)} />
    </div>
  );
}

export default App;
