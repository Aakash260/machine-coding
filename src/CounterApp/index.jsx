import { useState, useEffect } from "react";
const CounterApp = () => {
  const [counterTime, setCounterTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [isStarted, setIsStarted] = useState(false);
  const handleSubmit = () => {
    let { hours, minutes, seconds } = counterTime;
    hours = Number(hours);
    minutes = Number(minutes);
    seconds = Number(seconds);
    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      isNaN(seconds) ||
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59 ||
      seconds < 0 ||
      seconds > 59
    ) {
      return alert("Please enter valid values for HH:MM:SS");
    }

    setIsStarted((prev) => !prev);
  };
  useEffect(() => {
    let id = null;
    if (isStarted) {
      id = setInterval(() => {
        setCounterTime((prev) => {
          let { hours, minutes, seconds } = prev;

          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(id);
            setIsStarted(false);
            return prev;
          }
          if (seconds > 0) {
            seconds -= 1;
          } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(id);
  }, [isStarted]);

  const handleReset = () => {
    setIsStarted(false);
    setCounterTime({ hours: "", minutes: "", seconds: "" });
  };

  return (
    <div>
      <h1 className="text-center text-xl my-4">Counter App</h1>
      <div className="flex [&_input]:border [&_input]:p-4 [&_input]:rounded-md w-[20%] mx-auto gap-4">
        <input
          type="number"
          min={0}
          max={23}
          placeholder="HH"
          value={counterTime.hours}
          onChange={(e) =>
            setCounterTime({ ...counterTime, hours: e.target.value })
          }
        />
        <input
          type="number"
          min={0}
          max={59}
          placeholder="MM"
          value={counterTime.minutes}
          onChange={(e) =>
            setCounterTime({ ...counterTime, minutes: e.target.value })
          }
        />
        <input
          type="number"
          min={0}
          max={59}
          placeholder="SS"
          value={counterTime.seconds}
          onChange={(e) =>
            setCounterTime({ ...counterTime, seconds: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center [&_button]:border [&_button]:p-2 [&_button]:rounded-md [&_button]:cursor-pointer my-4 gap-4">
        <button onClick={handleSubmit}>{isStarted ? "Pause" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
