import React from 'react';
import { TextField } from '@mui/material';

const SearchContainer = ({ nameSearch, powerSearch, handleNameSearchChange, handlePowerSearchChange }) => {
  return (
    <div className="search-container">
      <TextField
        type="text"
        label="Search by Pokemon name"
        value={nameSearch}
        variant="outlined"
        onChange={handleNameSearchChange}
        style={{ marginRight: '10px' }}
      />

      <TextField
        type="number"
        label="Power threshold"
        value={powerSearch}
        onChange={handlePowerSearchChange}
      />
    </div>
  );
};

export default SearchContainer;
