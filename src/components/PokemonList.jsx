import React from 'react';

import PokemonCard from '../components/PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3'>
      {pokemons?.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.home.front_default}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokemonList;
