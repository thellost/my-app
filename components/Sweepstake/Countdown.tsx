"use client"; // Enables client-side rendering for this component

import { useState, useEffect} from "react"; // Import React hooks and types

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/25/2024  10:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // JSX return statement rendering the Countdown UI
  return (
    // Container div for centering the content
    <div className="">
      {/* Timer box container */}
      <div className="bg-baseCardGray text-gray-200">
        {/* Title of the countdown timer */}
        <h1 className="text-lg dark:text-gray-200">
        Closes in
        </h1>
        {/* Input and set button container */}
        {/* Display the formatted time left */}
        <div className="text-2xl font-bold flex gap-x-4 dark:text-gray-200 mb-8 items-center">
            <div className="bg-gray-100 py-1 px-2 text-center grid grid-cols-1 rounded-xl w-12 text-gray-800 items-center">
                <div className="">
                    {days}
                </div>
                <div className="text-sm">
                    Days
                </div>
            </div>
            <div className="bg-gray-100 py-1 px-2 text-center grid grid-cols-1 rounded-xl w-12 text-gray-800 items-center">
                <div className="">
                    {hours}
                </div>
                <div className="text-sm">
                    Hours
                </div>
            </div>
            <div className="bg-gray-100 py-1 px-2 text-center grid grid-cols-1 rounded-xl  w-12 text-gray-800 items-center">
                <div className="">
                    {minutes}
                </div>
                <div className="text-sm">
                    Mins
                </div>
            </div>
            <div className="bg-gray-100 py-1 px-2 text-center grid grid-cols-1 rounded-xl  w-12 text-gray-800 items-center">
                <div className="">
                    {seconds}
                </div>
                <div className="text-sm">
                    Secs
                </div>
            </div>
            
        </div>
        {/* Buttons to start, pause, and reset the timer */}
       
      </div>
    </div>
  );
}