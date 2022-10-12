import React from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

const NavMenu = () => {
  return (
    <div>
      <div className='hidden lg:flex p-3 items-center bg-[#2D70B7] text-white gap-x-1 rounded-lg'>
        <Squares2X2Icon className='h-6 w-6' />
        <span>Pokemons</span>
      </div>
    </div>
  );
};

export default NavMenu;
