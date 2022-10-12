import {
  ChartBarIcon,
  ClipboardDocumentListIcon,
  InformationCircleIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomBar = () => {
  let activeClassName = 'flex flex-col items-center justify-center text-white text-xs rounded-md bg-[#2D70B7]';
  let normalClassName = 'flex flex-col items-center justify-center text-neutral-900 text-xs rounded-md';
  return (
    <div className='fixed lg:hidden z-50 bottom-0 left-0 w-full h-16 shadow bg-white grid grid-cols-4 gap-4 px-4 py-2'>
      <NavLink className={({ isActive }) => (isActive ? activeClassName : normalClassName)} to='/' end>
        <Squares2X2Icon className='h-5 w-5' />
        Home
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? activeClassName : normalClassName)} to='/compare'>
        <ClipboardDocumentListIcon className='h-5 w-5' />
        Compare
      </NavLink>
      <NavLink to='statistics' className={({ isActive }) => (isActive ? activeClassName : normalClassName)}>
        <ChartBarIcon className='h-5 w-5' />
        Statistics
      </NavLink>
      <NavLink to='about' className={({ isActive }) => (isActive ? activeClassName : normalClassName)}>
        <InformationCircleIcon className='h-5 w-5' />
        About
      </NavLink>
    </div>
  );
};

export default BottomBar;
