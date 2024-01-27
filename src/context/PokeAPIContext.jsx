import React, { createContext, useContext, useState } from 'react';

const PokeAPIContext = createContext();

export function PokeAPIProvider({ children }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  // Función para realizar una solicitud de información de un Pokémon específico
  const getPokemonInfo = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      const data = await response.json();
      setPokemonInfo(data); // Almacenar la información del Pokémon en el estado
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <PokeAPIContext.Provider value={{ getPokemonInfo, pokemonInfo }}>
      {children}
    </PokeAPIContext.Provider>
  );
}

export function usePokeAPI() {
  return useContext(PokeAPIContext);
}
