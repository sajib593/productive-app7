import React, { useState } from 'react';
import { getData, removeFromAppList } from '../../Utils/localStorage';
import useApps from '../../Hooks/useApps';
import Loading from '../../Components/Loading/Loading';
import { FaDownload, FaStar } from 'react-icons/fa';

const Installation = () => {

    let [localStorageData, setLocalStorageData] = useState(()=> getData());
    //  console.log(localStorageData);
    
    

    let {apps, loading} = useApps();
    
    if (loading){
        
       return <Loading></Loading>
        
    }
    // console.log(apps);

    let installedApps = apps.filter(data=> localStorageData.includes(data.id))
    console.log(installedApps);

    let handleRemove =(id)=>{

        removeFromAppList(id)
        setLocalStorageData(pre=> pre.filter(p => p !== id))

    }
    

    return (
     <div className="space-y-4 max-w-4xl mx-auto p-4">
      {installedApps.length > 0 ? (
        installedApps.map(app => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 hover:shadow-md transition-all duration-200"
          >
            {/* Left Section */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={app.image}
                alt={app.title}
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md bg-gray-100 flex-shrink-0"
              />

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {app.title}
                </h2>
                <p className="text-sm text-gray-500">{app.companyName}</p>

                <div className="flex items-center gap-4 text-sm sm:text-base mt-1">
                  <div className="flex items-center text-green-600">
                    <FaDownload className="mr-1" />
                    <span>{app.downloads/1000000}M</span>
                  </div>

                  <div className="flex items-center text-orange-500">
                    <FaStar className="mr-1" />
                    <span>{app.ratingAvg}</span>
                  </div>

                  <p className="text-gray-500">{app.size} MB</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <button
            onClick={()=>handleRemove(app.id)}
            
              className="mt-3 sm:mt-0 bg-[#00C853] hover:bg-[#00b84a] text-white font-medium px-5 py-2 rounded-md transition-all"
            >
              Uninstall
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No installed apps found.</p>
      )}
    </div>
    );
};

export default Installation;


// onClick={() => alert(`Uninstalled ${app.title}`)}