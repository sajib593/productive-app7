
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


import { Outlet, useNavigation } from "react-router";
import Loading from "../Loading/Loading";


const MainLayOut = () => {

  let navigation = useNavigation();

    return (
      <>


      
   <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: { background: '#333', color: '#fff' },
        }}
      />
      

        <div className="max-w-11/12 mx-auto bg-amber-50">

     

            <NavBar></NavBar>

             {navigation.state === "loading" ? (
          <Loading /> // your spinner or skeleton
        ) : (
          <Outlet />
        )}

            <Footer></Footer>
        </div>
      
      </>
    );
};

export default MainLayOut;

