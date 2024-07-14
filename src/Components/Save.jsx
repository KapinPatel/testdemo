
import React, { useState } from 'react';
import './animetion.css'
import { useNavigate } from 'react-router-dom';

const Save = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false)


  const handleSkip = () => {
    navigate('/loading');
    setTimeout(() => navigate('/completion'), 4000);
  };
  return (
      <div className="bg-white p-8  max-w-full">
        <div className="flex flex-col md:items-start justify-center md:text-start">
            <h1 className="text-xl font-semibold text-wrap text-gray-500">Let's SAVE YOUR PROGRESS...</h1>
            <input className='border-2 rounded-lg border-lime-600 hover:border-lime-300 h-9 w-4/5 p-2 my-2' type="email" placeholder='Enter email address' />
            <p className='text-wrap pt-2'>
                By saving your progress you can skip question next time. <br />You can also SKIP and complete this step later. Just click on SIGN IN on the top right corner. 
            </p>
            <div className="my-4 h-6">
                <button className="bg-orange-600 hover:bg-orange-500 rounded-lg p-1 w-20 text-white">SAVE</button>
                <button onClick={handleSkip} disabled={loading} className="border-2 border-blue-500 ml-3 rounded-lg p-1 w-20">SKIP</button>
            </div>
        </div>
      </div>
  );
};

export default Save;
