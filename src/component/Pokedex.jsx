import React, { useState, useEffect } from 'react';
import PokedexScreen from './PokedexScreen';
import PokedexForm from './PokedexForm';
import { usePokeAPI } from '../context/PokeAPIContext'; // Importa la función usePokeAPI

function Pokedex() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Utiliza usePokeAPI para acceder a las funciones del contexto
  const { getPokemonInfo } = usePokeAPI();

  const RandomId = Math.floor(Math.random() * 1301 + 1);
  const [pokemonID, setPokemonId] = useState(RandomId);

  useEffect(() => {
    console.log('Solicitando información del Pokémon:', pokemonID);
    getPokemonInfo(pokemonID)
      .then((data) => {
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [pokemonID, getPokemonInfo]);

  return (
    <div>
      <div>
        <PokedexScreen loading={loading} error={error} />
      </div>
      <div>
        <PokedexForm setPokemonId={setPokemonId} setLoading={setLoading} setError={setError} />
      </div>
    </div>
  );
}

export default Pokedex;
