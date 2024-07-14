import NavBar from "./Components/NavBar";
import Qua from "./Components/Qua";
import Qub from "./Components/Qub";
import QuestionPage from "./Components/QuestionPage";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Save from "./Components/Save";
import Complition from "./Components/Complition";
import Loading from "./Components/Loading";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<NavBar/>,
    }
    ,
    {
      path:"/Qua",
      element:<Qua/>,

    },
    {
      path:"/Qub",
      element:<Qub/>,
    },
    {
      path:"/Quc",
      element:<QuestionPage/>,
    },
    {
      path:"/save",
      element:<Save/>,
    },
    {
      path:"/loading",
      element:<Loading/>,
    },
    {
      path:"/completion",
      element:<Complition/>,
    },

  ])
    return (
    <div className="m-3 w-auto md:m-10">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
