import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppPage = () => {

    const [search, setSearch] = useState('')
    
    let {apps} = useApps();
    // console.log(apps);

    const term = search.trim().toLocaleLowerCase()
  const searchedApps = term
    ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps



    return (
        <div>
             <h1 className="text-5xl font-bold text-center">Our All Applications</h1> <br />

            <h5 className="text-lg text-center">Explore All Apps on the Market developed by us. We code for Millions</h5>
            


            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>({apps.length}) Apps found</h2>

                <div>
                    <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
                </div>
            </div>








            <br />
                        <div className="mt-6">
  {searchedApps.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {searchedApps.map(app => (
        <Link key={app.id} to={`/appDetail/${app.id}`}>
          <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
            <figure className="h-48 overflow-hidden">
              <img
                className="w-full object-cover"
                src={app.image}
                alt={app.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>

              <div className="flex justify-between">
                <div className="bg-gray-100 p-2 text-green-600 rounded font-semibold flex items-center gap-1">
                  <FaDownload /> {app.downloads / 1000000}M
                </div>
                <div className="bg-pink-100 p-2 rounded font-semibold flex items-center gap-1 text-pink-700">
                  <FaStar className="text-pink-400" /> {app.ratingAvg}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="text-center text-5xl text-red-600 py-10">
      ❌ No data found
    </div>
  )}
</div>
            
            
        </div>
    );
};

export default AppPage;