import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ id, name, image, types }) => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    switch (types[0].type.name) {
      case 'grass':
        setBackground('bg-green-500');
        break;
      case 'fire':
        setBackground('bg-red-500');
        break;
      case 'water':
        setBackground('bg-blue-500');
        break;
      case 'poison':
        setBackground('bg-fuchsia-500');
        break;
      case 'bug':
        setBackground('bg-amber-500');
        break;
      case 'electric':
        setBackground('bg-yellow-500');
        break;
      case 'ground':
        setBackground('bg-amber-900');
        break;
      case 'fairy':
        setBackground('bg-pink-500');
        break;
      case 'rock':
        setBackground('bg-stone-500');
        break;
      case 'fighting':
        setBackground('bg-gray-500');
        break;
      default:
        setBackground('bg-indigo-500');
    }
  }, []);

  return (
    <Link to={`pokemon/${name}`}>
      <div className={`${background} rounded-xl shadow-md p-3`}>
        <div
          className={`relative flex items-center justify-center aspect-square bg-white/50 overflow-hidden rounded-md p-2 lg:p-4`}>
          <div className='absolute top-1 left-1 text-xs font-bold bg-white/50 py-1 px-2 rounded-full'>{id}</div>
          <img className='aspect-square w-full' src={image} alt='' />
        </div>
        <h5 className='text-center text-xl font-bold text-white capitalize my-2'>{name}</h5>
        <div className='flex justify-center gap-x-2'>
          {types.map(({ type }) => {
            return (
              <div key={type.name} className={`text-xs text-neutral-900 bg-white py-1 px-2 rounded-full capitalize`}>
                {type.name}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
