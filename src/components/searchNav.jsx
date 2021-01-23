import React, { useEffect, useState, useContext } from "react";
import SearchBar from "./common/searchBar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Tooltip from "@material-ui/core/Tooltip";

const SearchNav = ({
  value,
  handleSearch,
  handleSortChange,
  handleOrderChange,
  sortColumn,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const style = {
    marginTop: 18,
    display: "flex",
    alignItems: "flex-end",
    cursor: "pointer",
  };
  const sortIconClass = (order) => {
    return order === "desc" ? "fa fa-arrow-up" : "fa fa-arrow-down";
  };
  const raiseShort = (path) => {
    const sortColumnData = sortColumn;
    if (sortColumnData.path === path)
      sortColumnData.order = sortColumnData.order === "asc" ? "desc" : "asc";

    this.props.onSort(sortColumn);
  };
  return (
    <div>
      <div className="row">
        <div className="col-11 pr-0">
          <div className="d-flex justify-content-between pt-4 mt-1">
            <div style={style}>
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
                  value={sortColumn.path}
                  onChange={handleSortChange}
                >
                  <MenuItem value="all">
                    <em>All</em>
                  </MenuItem>

                  {/* <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem> */}
                  <MenuItem value={"name"}>Name</MenuItem>
                  <MenuItem value={"population"}>Population</MenuItem>
                  <MenuItem value={"area"}>Area</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="col-1">
          <div className="d-flex justify-content-between pt-4 mt-1">
            <Tooltip title={sortColumn.order} arrow placement="bottom">
              <div
                className=""
                style={style}
                onClick={() => handleOrderChange(sortColumn)}
              >
                <i
                  className={sortIconClass(sortColumn.order)}
                  aria-hidden="true"
                ></i>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
