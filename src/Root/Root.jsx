import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayOut from "../Components/LayOut/MainLayOut";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [

        {
            index: true,
            element: <Home></Home>
        }


    ]
  }
])


export default router