import React from "react";

function TimerControls({ handleStart, handlePause, handleReset, isRunning }) {
  return (
    <div className="controls">
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TimerControls;
