import React, { useContext, useState } from 'react';
import profile_icon from '../../assets/frontend_assets/profile-user.png';
import webcam from '../../assets/frontend_assets/webcam.png';
import search_icon from '../../assets/frontend_assets/search.png';
import cart_icon from '../../assets/frontend_assets/cart_icon.png';
import menu_icon from '../../assets/frontend_assets/menu_icon.png';
import { FaHome, FaThList, FaInfoCircle, FaPhone, FaArrowLeft } from 'react-icons/fa';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/frontend_assets/assets';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='navbar flex items-center justify-between py-1 px-4 bg-gradient-to-r from-purple-50 via-pink-200 to-blue-200 shadow-sm font-serif font-bold'>

      {/* Logo */}
      <Link to={'/'}>
        <img src={assets.logo_2} alt="Logo" className='logo w-8 sm:w-10 md:w-12 lg:w-14 object-contain' />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-blue-700 transition'>
          <p>HOME</p>
          <hr className='w-full border-none h-[2px] bg-blue-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-blue-700 transition'>
          <p>COLLECTION</p>
          <hr className='w-full border-none h-[2px] bg-blue-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-blue-700 transition'>
          <p>ABOUT</p>
          <hr className='w-full border-none h-[2px] bg-blue-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-blue-700 transition'>
          <p>CONTACT</p>
          <hr className='w-full border-none h-[2px] bg-blue-700 hidden' />
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={search_icon} alt="Search" className='w-7 cursor-pointer' />

        {/* 🎭 Emotion Detection Button (Webcam Icon) */}
        <button
          onClick={() => navigate('/emotion')}
          className='w-[35px] h-[35px] flex items-center justify-center bg-indigo-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors cursor-pointer'
          title='Launch Emotion Detection'
        >
          <img src={webcam} alt="Webcam" className='w-[24px] h-[24px]' />
        </button>

        {/* Profile */}
        <div className='group relative'>
          <img
            src={profile_icon}
            alt="Profile"
            className='w-7 cursor-pointer hover:scale-105 transition-transform duration-200'
          />
          <div className='hidden group-hover:block absolute right-0 pt-4 z-50'>
            <div className='flex flex-col gap-2 w-40 py-3 px-5 rounded-xl shadow-lg bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 text-gray-700 animate-fade-in'>
              <p className='cursor-pointer hover:text-blue-700 hover:font-semibold transition'>👤 My Profile</p>
              <p className='cursor-pointer hover:text-green-700 hover:font-semibold transition'>📦 Orders</p>
              <p className='cursor-pointer hover:text-red-600 hover:font-semibold transition'>🚪 Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={cart_icon} alt="Cart" className='w-7 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon for Mobile */}
        <img onClick={() => setVisible(true)} src={menu_icon} alt="Menu" className='w-7 cursor-pointer sm:hidden' />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-gradient-to-b from-blue-100 to-white shadow-2xl transition-all duration-300 ease-in-out ${
          visible ? 'w-3/4 sm:w-1/2 px-5' : 'w-0 overflow-hidden'
        }`}
      >
        <div className='flex flex-col h-full text-gray-800 font-medium py-6 space-y-4'>

          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-3 p-3 cursor-pointer text-sm text-blue-700 hover:bg-blue-200 rounded-md transition'
          >
            <FaArrowLeft />
            <p>Back</p>
          </div>

          <hr className="border-gray-300" />

          {/* Mobile Menu Links */}
          <NavLink
            onClick={() => setVisible(false)}
            to='/'
            className='flex items-center gap-3 py-3 pl-3 rounded-md text-blue-900 hover:bg-blue-100 hover:text-blue-800 transition'
          >
            <FaHome /> HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to='/collection'
            className='flex items-center gap-3 py-3 pl-3 rounded-md text-green-900 hover:bg-green-100 hover:text-green-800 transition'
          >
            <FaThList /> COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to='/about'
            className='flex items-center gap-3 py-3 pl-3 rounded-md text-purple-900 hover:bg-purple-100 hover:text-purple-800 transition'
          >
            <FaInfoCircle /> ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to='/contact'
            className='flex items-center gap-3 py-3 pl-3 rounded-md text-red-900 hover:bg-red-100 hover:text-red-800 transition'
          >
            <FaPhone /> CONTACT
          </NavLink>

          <div className='flex-grow'></div>

          {/* Footer */}
          <div className='text-xs text-center text-gray-400 pt-4'>
            © 2025 TrendEase
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
