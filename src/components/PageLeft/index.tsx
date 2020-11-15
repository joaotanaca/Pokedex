import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { SimplePokemon } from '../../interfaces/pokemons';
import { StatesRedux } from '../../interfaces/redux';
import api from '../../services/api';

import { ContainerBottom } from './styles';

const PageBottom = React.memo(
  ({
    pokemons,
    setPokemonActually,
  }: {
    pokemons: SimplePokemon[];
    setPokemonActually: Dispatch<SetStateAction<undefined>>;
  }) => {
    const {
      pagination: { initialFinal },
    } = useSelector((state: StatesRedux) => state);
    const [initial] = initialFinal ?? [1, 10];
    return (
      <ContainerBottom>
        {pokemons.map((pokemon: SimplePokemon, index) => (
          <button
            key={pokemon.name}
            type="button"
            onClick={() => {
              api.get(`/pokemon/${pokemon.name}`).then((res) => {
                setPokemonActually(res.data);
                api
                  .get(`/pokemon-color/${res.data.id}`)
                  .then((response) => console.log(response.data))
                  .catch((err) => console.log(err));
              });
            }}
          >
            <p>{initial + index}</p>
          </button>
        ))}
      </ContainerBottom>
    );
  }
);

export default PageBottom;
