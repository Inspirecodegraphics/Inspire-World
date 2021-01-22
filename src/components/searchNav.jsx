import React, { useEffect, useState, useContext } from "react";
import SearchBar from "./common/searchBar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SearchNav = ({ value, handleSearch, handleSortChange, sortColumn }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className={`d-flex justify-content-between pt-4 mt-1`}>
        <div style={{ marginTop: 20 }}>
          <SearchBar value={value} handleSearch={handleSearch}></SearchBar>
        </div>
        <div>
          <FormControl style={{ minWidth: 120 }}>
            <InputLabel id="user-country-search">Sort by</InputLabel>
            <Select
              labelId="user-country-search"
              id="user-country-search"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={sortColumn}
              onChange={handleSortChange}
            >
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>

              <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
