import React from 'react';

const PokemonDetail = ({ detail }) => {
  const addLeadingZeros = (num) => {
    return String(num).padStart(3, '0');
  };
  return (
    <div className='p-2 bg-white shadow rounded-md'>
      <div className='relative bg-green-500 aspect-square rounded p-4'>
        <h1 className='absolute top-4 left-4 capitalize text-white font-bold text-2xl'>
          {detail?.name} <span className='text-white/50 font-medium'>#{addLeadingZeros(detail?.id)}</span>{' '}
        </h1>
        <img className='w-full' src={detail?.sprites.other.home.front_default} alt='' />
      </div>

      <div className='flex items-center space-x-2 my-4'>
        <h2 className='text-xl font-semibold'>Type :</h2>
        <div className='flex space-x-2'>
          {detail?.types.map(({ type }) => (
            <div key={type.name} className='capitalize bg-green-500 px-3 py-1 text-xs text-white rounded-full'>
              {type.name}
            </div>
          ))}
        </div>
      </div>

      <div className='bg-[#0B233D] grid grid-cols-2 p-4 text-white rounded-lg'>
        <div>
          <span className='text-white/90 font-light text-base'>Height</span>
          <h3 className='text-2xl font-semibold'>{detail?.height / 10} m</h3>
        </div>
        <div>
          <span className='text-white/90 font-light text-base'>Weight</span>
          <h3 className='text-2xl font-semibold'>{detail?.weight / 10} kg</h3>
        </div>
        <div>
          <span className='text-white/90 font-light text-base'>Gender</span>
          <h3 className='text-2xl font-semibold'>2' 04"</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
