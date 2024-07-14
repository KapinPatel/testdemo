import React from 'react'
import { useNavigate } from 'react-router-dom';

const Paginate = ({ prevTargetPage, nextTargetPage }) => {
    const navigate = useNavigate();

    const handlePrevClick = () => {
      navigate(prevTargetPage);
    };
  
    const handleNextClick = () => {
      navigate(nextTargetPage);
    };

  return (
    <div className='pt-4'> <div className="flex gap-1 ">
   <button  onClick={handlePrevClick } 
     className="bg-orange-500 hover:bg-orange-400 text-orange-800 font-bold py-2 px-4 rounded">
    <i class="fa-solid fa-angle-up"></i>
    </button>

    <button onClick={handleNextClick} 
    className="bg-orange-500 hover:bg-orange-400 text-orange-800 font-bold py-2 px-4 rounded">
   &#9013; 
    </button>
    

  </div></div>
  )
}

export default Paginate