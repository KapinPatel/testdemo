// src/components/QuestionPage.js
import React, { useState } from 'react';
import Paginate from './Paginate';
import './animetion.css'
import { useNavigate } from 'react-router-dom';

const Qua = () => {
  const navigate=useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showShakeAnimation, setShowShakeAnimation] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextClick = () => {
    if (selectedAnswer === null) {
    setShowShakeAnimation(true);
    setTimeout(() => setShowShakeAnimation(false), 1000); 
    }
    else{
      navigate('/Qub')
    }
  };

  return (
      <div className="bg-white p-8  max-w-full">
        <h2 className="text-2xl font-bold mb-4">1. How is this home heated?(choose the main system, if more then one)'</h2>
        <div className={`space-y-4 grid-flow-rows grid-cols-2 gap-2 md:grid ${showShakeAnimation ? 'shake 0.8s ease-in-out' : 'none'}`}>
          {['Control Natural gas Furnace', 'Electric Resistance Furnace', 'Heat Pump(Central and Mini Split)', 'Boiler with Radiator','Electric Baseboard Heater','Propane Furnace','Oil Furnace',"Don't know/Unsure"].map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`block w-full py-2 px-4 text-center rounded-md transition duration-300 ${
                selectedAnswer === index ? 'bg-green-500 text-white' : 'bg-green-200 hover:bg-green-300 text-gray-800'
              }`}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className='flex justify-between'>
          <button
            onClick={handleNextClick}
            className={`mt-8 py-1 px-6 text-center rounded-md transition duration-300 ${
              selectedAnswer !== null ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border-2 border-orange-600 text-gray-600 cursor-pointer'
            }`}
    
          >
            Next
          </button>
         <div className='pt-4'>
               <Paginate prevDirection="up" prevTargetPage="/" nextDirection="down" nextTargetPage="/Qub" />
          </div>
    
        </div>
      </div>
  );
};

export default Qua;
