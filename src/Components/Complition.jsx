
import React from 'react';
import './animetion.css'

const Complition = () => {
  
  return (
      <div className="bg-white p-8 flex-col text-center justify-center text-wrap max-w-full">
    
        <h5>
            Calculations completed for this home! 
        </h5>
        <p className="text-gray-600 text-sm">
            We have saved your response for <strong>222 DEMO TS, SACRAMENTO, CA 95822</strong> You can access this home anytime under 'MY ACCOUNT' after sining in.
        </p>
        <div className='flex-col pt-4 justify-center text-center h-28'>
            <button className='h-20 w-20 bg-blue-800 rounded-full text-3xl font-bold text-white'>&#10003;</button>
        </div>
        <button className='bg-orange-600 hover:bg-orange-500 rounded-lg p-1  w-20 text-white'>Ready</button>
      </div>
  );
};

export default Complition;
