// PokemonFilter.js
import React, { useEffect, useState } from 'react';
import calculatePower from './calculatePower';

const PokemonFilter = ({ pokemonData, nameSearch, powerSearch, setFilteredPokemon }) => {
  useEffect(() => {
    const filteredPokemon = pokemonData.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
        (powerSearch === '' || parseInt(powerSearch, 10) <= calculatePower(pokemon))
    );
    setFilteredPokemon(filteredPokemon);
  }, [pokemonData, nameSearch, powerSearch, setFilteredPokemon]);

  return null; // This component doesn't render anything, it just handles filtering logic
};

export default PokemonFilter;
