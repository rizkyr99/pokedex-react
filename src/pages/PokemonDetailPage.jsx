import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';

const PokemonDetailPage = () => {
  const { name } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getDetail = async () => {
    setLoading(true);
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setDetail(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  const Loading = () => <div>Loading ...</div>;

  return loading ? <Loading /> : <PokemonDetail detail={detail} />;
};

export default PokemonDetailPage;
