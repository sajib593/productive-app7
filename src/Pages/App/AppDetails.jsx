import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import { FaDownload, FaRegCommentDots, FaStar } from "react-icons/fa";
import Loading from "../../Components/Loading/Loading";
import Installation from "../Installation/installation";
import { updateData } from "../../Utils/localStorage";
import toast from "react-hot-toast";
import { useState } from "react";



const AppDetails = () => {
  let [isInstalled, setIsInstalled] = useState(false)
  
  
  let params = useParams();
  // console.log(params.id);
  
  let { apps, loading } = useApps();
  console.log(apps);
  
  if (loading) {
    return <Loading></Loading>
  }


  let data = apps.find(app => app.id === Number(params.id))

  // console.log(data);

  let handleUpdateData = (id) => {

    toast.success("✅ Ticket created successfully!");
    updateData(id)
    setIsInstalled(true)
  }



  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto mt-10">

 


      {/* Left: App Image */}
      <div className="flex-shrink-0">
        <img
          src={data.image}
          alt="SmPlan"
          className="w-52 h-52 object-contain rounded-lg"
        />
      </div>

      {/* Middle: App Info */}

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800">
          {data.title}
        </h2>
        <p className="text-gray-500 mt-1">
          Developed by <span className="text-blue-700">{data.companyName}</span>

        </p>

        {/* Divider */}
        <hr className="my-4 border-gray-200" />

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6 text-gray-700">
          {/* Downloads */}
          <div className="flex flex-col items-center md:items-start">
            <FaDownload className="text-[#00C853] text-xl" />
            <p className="text-sm">Downloads</p>
            <p className="text-lg font-bold mt-1">{data.downloads
              / 1000000}M</p>
          </div>

          {/* Ratings */}
          <div className="flex flex-col items-center md:items-start">
            <FaStar className="text-[#FFA000] text-xl" />
            <p className="text-sm">Average Ratings</p>
            <p className="text-lg font-bold mt-1">{data.ratingAvg}</p>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center md:items-start">
            <FaRegCommentDots className="text-[#7E57C2] text-xl" />
            <p className="text-sm">Total Reviews</p>
            <p className="text-lg font-bold mt-1">{data.reviews / 1000}K</p>
          </div>
        </div>
      </div>

      {/* Right: Install Button */}
      <div className="flex-shrink-0">


        <button 
        onClick={() => handleUpdateData(data.id)} 

        disabled = {isInstalled}

        className="bg-[#00C853] hover:bg-[#00b84a] text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all">

          {isInstalled ? 'Installed' : `Install Now (${data.size} MB)`}
          
          
        </button>
      </div>




    </div>
  );
};

export default AppDetails;

// updateData(data.id)
// toast.success("✅ Ticket created successfully!");