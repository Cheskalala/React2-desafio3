import React from 'react';
import LoadingPokemon from '../assets/loading.gif'
import Stat from './Stat';


function PokedexScreen({ pokemon, loading, error }) {
    if (error) {
      return (
        <div className="pokedex-screen">
          <img
            src={ErrorPokemon}
            alt="Hubo un error buscando tu Pokémon"
            className="pokedex-no-screen"
          />
        </div>
      );
    }
  
    return (
      <div className="pokedex-screen">
        {!pokemon || loading ? (
          <img
            src={LoadingPokemon}
            alt="Aún no hay ningún Pokémon"
            className="pokedex-no-screen"
          />
        ) : (
          <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img
              className="pokemon-img"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <ul className="pokemon-stats">
              {pokemon.stats.map((item) => (
                <Stat key={item.stat.name} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  

export default PokedexScreen;
