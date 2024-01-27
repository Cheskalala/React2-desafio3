import React, { useState, useEffect } from 'react';

function PokedexForm({ setPokemonId, setLoading, setError }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadingNames, setLoadingNames] = useState(true);

  useEffect(() => {
 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((res) => res.json())
      .then((data) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
        setLoadingNames(false);
      })
      .catch((err) => {
        console.error('Error al obtener la lista de nombres de Pokémon', err);
        setLoadingNames(false);
      });
  }, []);

  const handleSelectChange = (e) => {
    const selectedPokemon = e.target.value;
    setLoading(true);
    setError(false);
    setPokemonId(selectedPokemon);
  };

  return (
    <div className="pokemon-dropdown-container">
      <label htmlFor="pokemonSelect">Selecciona un Pokémon:</label>
      <select
        id="pokemonSelect"
        className="pokemon-dropdown"
        onChange={handleSelectChange}
      >
        {loadingNames ? (
          <option value="" disabled>
            Cargando nombres...
          </option>
        ) : (
          <option value="" disabled>
            Selecciona un Pokémon
          </option>
        )}
        {pokemonList.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PokedexForm;
