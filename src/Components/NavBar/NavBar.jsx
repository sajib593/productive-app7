import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import logo from "./../../assets/logo.png"

const NavBar = () => {
    return (
          <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/app'>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/wishlist'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-2xl font-bold flex items-center'>
        <img className='h-7 hidden md:block ' src={logo} alt="" />
          <h2>HERO.IO</h2>
        </Link>
      </div>





      <div className='navbar-center '>

         <ul className='menu menu-horizontal px-1 hidden lg:flex font-semibold'>
          <li>
            <NavLink to='/'>Home</NavLink> 
          </li>
          <li>
            <NavLink to='/app'>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/wishlist'>Installation</NavLink>
          </li>
        </ul>
      </div>



      <div className='navbar-end'>
       
        <NavLink to='/products' className='btn bg-gradient-to-r from-orange-400 to-purple-600 text-white'>
        <FaGithub />
          Contribute
        </NavLink>
      </div>
    </div>
    );
};

export default NavBar;