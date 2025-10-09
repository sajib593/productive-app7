
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


import { Outlet } from "react-router";


const MainLayOut = () => {
    return (
      <>


      
   <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: { background: '#333', color: '#fff' },
        }}
      />
      

        <div className="max-w-11/12 mx-auto bg-amber-50">

     

            <NavBar></NavBar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
      
      </>
    );
};

export default MainLayOut;

