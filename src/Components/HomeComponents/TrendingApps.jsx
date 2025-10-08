import { Link } from "react-router";
import useApps from "../../Hooks/useApps";
import { FaDownload, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const TrendingApps = () => {

    let {apps, loading} = useApps()
//    console.log(apps);

let eightApps = apps.slice(0, 8)


//    let {companyName,description,downloads,id,image,ratingAvg,ratings,reviews,size,title} = apps;

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Trending Apps</h1> <br />

            <h5 className="text-lg text-center">Explore All Trending Apps on the Market developed by us</h5>
            {/* <h2>{apps.length}</h2> */}

            <br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                
                eightApps.map(app =>   <div className='card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out '>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={app.image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{app.companyName}</h2>

        <div className="flex justify-between">
            <div className="bg-gray-100 p-2 text-green-600 rounded font-semibold flex items-center gap-1"><span><FaDownload /></span> {app.downloads/1000000}M</div>

            <div className="bg-pink-100 p-2 rounded font-semibold flex items-center gap-1 text-pink-700"><span><FaStar className="text-pink-400" /></span> {app.ratingAvg}</div>



        {/* <div>{app.ratingAvg}</div> */}
        </div>
        
      </div>
    </div>)
            }
            
            </div>
                    <br />

            <div className='text-center'>
          <Link to="/app" className='btn bg-gradient-to-r from-orange-400 to-purple-600 text-white p-4'>
            Show All
          </Link>
         
        </div>

        </div>
    );
};

export default TrendingApps;



{/* <div className='card-actions justify-end'>
          <Link to={`/product/${app.id}`} className='btn btn-outline'>
            View Details
          </Link>
        </div> */}