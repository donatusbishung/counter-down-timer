import React from "react";

function TimerInput({ setMinutes, setSeconds }) {
  return (
    <div className="inputs">
      {/* <input
        type="number"
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="Minutes"
      /> */}
      <input
        type="number"
        onChange={(e) => setSeconds(Number(e.target.value))}
        placeholder="Seconds"
      />
    </div>
  );
}

export default TimerInput;
