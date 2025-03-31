
import { useState, useEffect } from "react";

export function LiveClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="flex items-center justify-center bg-farm-cream dark:bg-gray-800 py-2 px-4 rounded-md shadow-sm">
      <div className="text-farm-green dark:text-green-400 text-center">
        <div className="text-sm md:text-base font-medium">{formatDate(dateTime)}</div>
        <div className="text-xl md:text-2xl font-bold">{formatTime(dateTime)}</div>
      </div>
    </div>
  );
}
