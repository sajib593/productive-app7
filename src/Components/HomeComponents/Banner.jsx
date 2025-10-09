import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa6';


import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>

            <div>
                <h1 className='text-6xl text-center font-bold'>We Build <br /> <span className='text-purple-500'>Productive</span> Apps</h1>
            </div>

            <br />

            <div>
                <h5 className='text-center text-xs'>AI HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</h5>
            </div>

            <br /><br />


            <div className='text-center flex justify-center gap-2'>

                <a
                    href="https://play.google.com/store/games?hl=es_419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-soft btn-primary rounded font-semibold mr-3"
                >
                    <FaGooglePlay className="text-blue-500" /> Google Play
                </a>




                {/* <Link to={`https://www.apple.com/app-store`} className='btn btn-soft btn-primary rounded font-semibold'> <FaAppStoreIos className='text-blue-500' />  App Store</Link> */}

                <a
                    href="https://www.apple.com/app-store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-soft btn-primary rounded font-semibold"
                >
                    <FaAppStoreIos className="text-blue-500" /> App Store
                </a>



            </div>

        </div>
    );
};

export default Banner;