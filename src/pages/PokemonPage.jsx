import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import PokemonList from '../components/PokemonList';

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon');

  const getAllPokemons = async () => {
    const res = await axios.get(loadMore);
    setLoadMore(res.data.next);
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemons((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <PokemonList pokemons={pokemons} />

      <button className='shadow-md bg-primary my-4 px-2 py-4' onClick={getAllPokemons}>
        Load More
      </button>
    </>
  );
};

export default PokemonPage;
