import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ value, handleSearch }) => {
  return (
    <TextField
      size="small"
      id="searchBar"
      placeholder="Search..."
      value={value}
      aria-label="Search"
      onChange={(e) => handleSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon size="small" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
