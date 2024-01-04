import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationContainer = ({ itemsPerPage, currentPage, totalItems, handleItemsPerPageChange, paginate }) => {
  const options = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      <label id="label">Rows per page:</label>
      <select
        id="options"
        onChange={handleItemsPerPageChange}
        value={itemsPerPage}
        style={{ marginLeft: '5px' }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <Pagination count={Math.ceil(totalItems / itemsPerPage)} page={currentPage} onChange={(event, value) => paginate(value)} />
    </div>
  );
};

export default PaginationContainer;
