import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TableContainerComponent = ({ displayedPokemon, calculatePower }) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table className="responsive-table">
        <TableHead>
          <TableRow style={{ background: '#ECF0F1', color: 'black' }}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Health</TableCell>
            <TableCell>Attack</TableCell>
            <TableCell>Defence</TableCell>
            <TableCell>Special Attack</TableCell>
            <TableCell>Special Defence</TableCell>
            <TableCell>Speed</TableCell>
            <TableCell>Power</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedPokemon.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell>{pokemon.id}</TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>{pokemon.type}</TableCell>
              <TableCell>{pokemon.hp}</TableCell>
              <TableCell>{pokemon.attack}</TableCell>
              <TableCell>{pokemon.defense}</TableCell>
              <TableCell>{pokemon.special_attack}</TableCell>
              <TableCell>{pokemon.special_defense}</TableCell>
              <TableCell>{pokemon.speed}</TableCell>
              <TableCell>{calculatePower(pokemon)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContainerComponent;
