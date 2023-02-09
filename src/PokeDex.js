import React, { useEffect, useState } from 'react';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';
import './PokeDex.css';
import useAxiosGet from './hooks/useAxiosGet';
/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  // const [pokemon, setPokemon] = useState([]);
  const [pmName, setPmName] = useState('absol');
  let url = `https://pokeapi.co/api/v2/pokemon/${pmName}/`;
  // console.log(url);

  // useEffect(setPmName(useAxiosGet(url)), []);

  const getAxiosReq = useAxiosGet(url);
  // console.log(getAxiosReq);
  const addPokemon = async (name) => {
    setPmName(name);
    getAxiosReq.connect();
    // const response = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${name}/`
    // );
    console.log(getAxiosReq.data);
    // setPokemon((pokemon) => [...pokemon, { ...getAxiosReq.data, id: uuid() }]);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {getAxiosReq.data.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
