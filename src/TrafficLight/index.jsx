import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const lights = ["bg-red-500", "bg-yellow-500", "bg-green-500"];
  const [active, setActive] = useState("red");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % lights.length;
      setActive(lights[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      {lights.map((light) => (
        <div
          key={light}
          className={`w-16 h-16 rounded-full ${
            active === light ? light : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
