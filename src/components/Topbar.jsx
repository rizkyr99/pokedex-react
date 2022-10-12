import React from 'react';
import logo from '../assets/img/logo.png';
import github from '../assets/img/github.svg';
import { MagnifyingGlassIcon, MoonIcon } from '@heroicons/react/24/solid';

const Topbar = () => {
  return (
    <div className='fixed z-50 top-0 left-0 w-full flex flex-wrap sm:flex-nowrap sm:gap-x-8 gap-y-2 sm:gap-y-0 h-28 content-center  sm:h-20 bg-white justify-between items-center px-3 shadow-md'>
      <img src={logo} className='h-10 sm:order-1' alt='' />
      <div className='flex items-center space-x-1 justify-start sm:order-3'>
        <img src={github} className='h-7 w-7' alt='' />
        <MoonIcon className='h-7 w-7 flex-shrink-0' />
      </div>
      <div className='w-full sm:w-max flex items-center space-y-0 space-x-2 sm:order-2'>
        <div className='flex flex-1 min-w-0 pr-2 items-center sm:w-80 h-10 bg-neutral-200 rounded-lg'>
          <input type='text' className='h-full flex-1 min-w-0 px-2 bg-transparent outline-none' placeholder='Search' />
          <MagnifyingGlassIcon className='w-6 h-6 text-neutral-400' />
        </div>
        <select className='h-10 bg-white border border-neutral-200 rounded-lg' name='' id=''>
          <option value=''>All types</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
