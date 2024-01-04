import React, { useState } from 'react';
import usePokemonData from './usePokemonData';
import calculatePower from './calculatePower';
import PokemonFilter from './PokemonFilter';
import PowerStats from './Powerstats';
import PaginationContainer from './Pagination';
import SearchContainer from './Search';
import TableContainerComponent from './Table';

import './style.css'; // Import the CSS file for styling

const PokemonTable = () => {
  const pokemonData = usePokemonData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [nameSearch, setNameSearch] = useState('');
  const [powerSearch, setPowerSearch] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [minPower, setMinPower] = useState(0);
  const [maxPower, setMaxPower] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const displayedPokemon = filteredPokemon.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNameSearchChange = (event) => {
    setNameSearch(event.target.value);
  };

  const handlePowerSearchChange = (event) => {
    setPowerSearch(event.target.value);
  };

  const handleItemsPerPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="pokemon-table-container">
      <SearchContainer
        nameSearch={nameSearch}
        powerSearch={powerSearch}
        handleNameSearchChange={handleNameSearchChange}
        handlePowerSearchChange={handlePowerSearchChange}
      />
      <PokemonFilter
        pokemonData={pokemonData}
        nameSearch={nameSearch}
        powerSearch={powerSearch}
        setFilteredPokemon={setFilteredPokemon}
      />      
      <PowerStats
        displayedPokemon={displayedPokemon}
        calculatePower={calculatePower}
        setMinPower={setMinPower}
        setMaxPower={setMaxPower}
      />
      <div className="MinMax">
        <span>Min Power: {minPower}</span>
        <span>Max Power: {maxPower}</span>
      </div>

      <TableContainerComponent displayedPokemon={displayedPokemon} calculatePower={calculatePower} />
      <PaginationContainer
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalItems={filteredPokemon.length}
        handleItemsPerPageChange={handleItemsPerPageChange}
        paginate={paginate}
      />
    
    </div>
  );
};

export default PokemonTable;
