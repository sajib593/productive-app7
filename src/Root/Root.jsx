import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayOut from "../Components/LayOut/MainLayOut";
import App from "../Pages/App/App";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [

        {
            index: true,
            element: <Home></Home>
        },

        {
          path: '/app',
          element: <App></App>

        }


    ]
  }
])


export default router