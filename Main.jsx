import { useState, useEffect } from 'react';

export default function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Moscow timezone
      const now = new Date();
      const options = {
        timeZone: 'Europe/Moscow',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      
      const moscowTime = new Intl.DateTimeFormat('ru-RU', options).format(now);
      setCurrentTime(moscowTime);
    };

    // Update time immediately
    updateTime();
    
    // Update every second
    const timerId = setInterval(updateTime, 1000);
    
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-600 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-purple-800 rounded-3xl px-8 py-6 shadow-lg backdrop-blur-sm">
        <h1 className="text-white text-8xl font-bold tracking-wider text-center">
          {currentTime}
        </h1>
      </div>
    </div>
  );
}
