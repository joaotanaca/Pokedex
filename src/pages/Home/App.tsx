import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerHome } from './styles';
import api from '../../services/api';
import { createPagination } from '../../store/actions';
import { SimplePokemon } from '../../interfaces/pokemons';
import PageBottom from '../../components/PageBottom';
import PageLeft from '../../components/PageLeft';
import { StatesRedux } from '../../interfaces/redux';

function App() {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const [, setPokemonActually] = useState();
  const dispatch = useDispatch();
  const {
    pagination: { initialFinal },
  } = useSelector((state: StatesRedux) => state);
  const [initial] = initialFinal ?? [1, 10];
  useEffect(() => {
    api
      .get('/pokemon', {
        params: {
          limit: 10,
          offset: initial - 1,
        },
      })
      .then((res) => {
        setPokemons(res.data.results);
        dispatch(createPagination(res.data.count));
      });
  }, []);
  useEffect(() => {
    api
      .get('/pokemon', {
        params: {
          limit: 10,
          offset: initial - 1,
        },
      })
      .then((res) => {
        setPokemons(res.data.results);
      });
  }, [initial]);

  return (
    <ContainerHome>
      <PageBottom />
      <PageLeft pokemons={pokemons} setPokemonActually={setPokemonActually} />
    </ContainerHome>
  );
}

export default App;
