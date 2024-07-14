import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const timer1 = setTimeout(() => setMessage('Processing request...'), 500);
    const timer2 = setTimeout(() => setMessage('Gathering data...'), 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-8">{message}</h2>
    </div>
  );
};

export default Loading;
