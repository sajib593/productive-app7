import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayOut from "../Components/LayOut/MainLayOut";

import AppPage from "../Pages/App/AppPage";
import AppDetails from "../Pages/App/AppDetails";
import Installation from "../Pages/Installation/installation";
import NotFound from "../Pages/Installation/NotFound";


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
          element: <AppPage></AppPage>

        },

        {
          path: '/appDetail/:id',
          element: <AppDetails></AppDetails>,
          errorElement: <NotFound></NotFound>
        },

        {
          path: '/installation',
          element: <Installation></Installation>
        },


    ]
  }
])


export default router