// PowerStats.js
import React, { useEffect, useState } from 'react';

const PowerStats = ({ displayedPokemon, calculatePower, setMinPower, setMaxPower }) => {
  useEffect(() => {
    if (displayedPokemon.length > 0) {
      const minPowerPage = Math.min(...displayedPokemon.map((pokemon) => calculatePower(pokemon)));
      const maxPowerPage = Math.max(...displayedPokemon.map((pokemon) => calculatePower(pokemon)));

      setMinPower(minPowerPage);
      setMaxPower(maxPowerPage);
    }
  }, [displayedPokemon, calculatePower, setMinPower, setMaxPower]);

  return null; // This component doesn't render anything in the UI
};

export default PowerStats;
