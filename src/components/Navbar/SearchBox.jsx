import React from "react";

const SearchBox = ({ searchQuery, onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="search-box"
      />
    );
  };

  export default SearchBox;