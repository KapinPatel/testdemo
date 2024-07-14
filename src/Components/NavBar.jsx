import { useNavigate } from 'react-router-dom'
import Paginate from './Paginate'
const NavBar = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
      navigate('/Qua')
    }

  return (
    <div className="text-center md:text-center  md:max-w-auto">
      <h4 className="font-bold text-xl">Demo</h4>
      <div className="md:max-w-full">
        <div className="pt-1 grid-flow-col grid-cols-2 gap-4 md:grid">
          <ul className="m-3 list-none border space-y-2  ">
            <li className="md:w-11/12 bg-white font-bold">Home facts:</li>
            <li className="md:max-w-full bg-gray-300 p-2 flex justify-between"><h5>Year Build:</h5> <span className='text-green-500'>1953</span></li>
            <li className="md:max-w-full bg-white px-2  flex justify-between"><h5>Home Area(sqft):</h5> <span className='text-green-500'>2087</span></li>
            <li className="md:max-w-full bg-gray-300  p-2 flex justify-between"><h5>Solar:</h5> <span className='text-green-500'>No</span></li>
          </ul>
          <ul className="m-3 border space-y-2">
            <li className="md:w-11/12 bg-white font-bold">Utility and Rates:</li>
            <li className="md:max-w-full bg-gray-300 flex justify-between p-2"><h5>Electric Rate:</h5> <span className='text-green-500'>SMUD 5-8 TOD rate</span></li>
            <li className="md:max-w-full bg-white flex px-2 justify-between"><h5>Not Gas Rate:</h5> <span className='text-green-500'>PG&E G-1 rate</span></li>
            <li className="md:max-w-full bg-gray-300 flex justify-between h-10"></li>
          </ul>
        </div>
        <div className='max-h-3 flex justify-end p-1 mt-1 text-orange-500'>
          <a className='gap-1' href="#">Edit<i className="p-1 fa-regular fa-pen-to-square"></i></a>
        </div>  
      </div>
      <div className='pt-4 m-2 flex justify-between   md:max-w-auto'>
            <button onClick={handleNextClick} className="bg-orange-500 hover:bg-orange-700 text-white font-bold h-9 px-4 mt-5 rounded-3xl">
            Next <span className="ml-2">&#10003;</span>
            </button>
            <div className='pt-4'>
              <Paginate prevDirection="" prevTargetPage="" nextDirection="down" nextTargetPage="/Qua" />
            </div>
    </div>
    </div>
  )
}
export default NavBar