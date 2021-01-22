import React, { useState, useEffect } from "react";
import SearchNav from "./searchNav";
import Pagination from "@material-ui/lab/Pagination";
import CountryData from "./countryProfile";
import countryService from "../services/countryService";
import { paginate } from "../services/paginate";
import Listgroup from "./common/listgroup";
import _ from "lodash";
import { Link } from "react-router-dom";

const Country = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "all" });
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegion, SetSelectedRegion] = useState(null);

  useEffect(() => {
    let init = async () => {
      const countries = await countryService.getAllCountries();
      setCountry(countries.data);
    };
    init();
  }, []);

  const regions = [...new Set(country.map((data) => data.region))];

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    SetSelectedRegion(null);
  };
  const handleSortChange = (event) => {
    let order = event.target.value;
    setSortColumn({ path: "name", order: order });
    console.log(`?sortBy=${event.target.value}`);
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleReasonChange = (genre) => {
    SetSelectedRegion(genre);
    setCurrentPage(1);
    setSearchQuery("");
  };
  const getPageData = () => {
    let filtered = country;
    if (searchQuery)
      filtered = country.filter((c) =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedRegion)
      filtered = filtered.filter((c) => c.region === selectedRegion);
    let sorted = filtered;
    if (sortColumn.order !== "all")
      sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);
    const finalCountry = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, finalCountry };
  };
  const { totalCount, finalCountry } = getPageData();

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <SearchNav
            value={searchQuery}
            handleSearch={handleSearch}
            handleSortChange={handleSortChange}
            sortColumn={sortColumn.order}
          ></SearchNav>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 my-4 px-lg-0">
          {finalCountry.length === 0 && (
            <p className="text-center pt-3">
              Sorry the <b>Country</b> you are looking is not found.
              <br />
              Back to{" "}
              <Link
                className="read-more btn-flat red-text p-1 mr-0 mml-1"
                to="/"
                style={{ fontSize: "inherit" }}
              >
                Home
              </Link>
            </p>
          )}
          <CountryData country={finalCountry}></CountryData>
        </div>
        <div className="col-lg-2 my-4 pr-lg-0 side-regions">
          <h5 className="text-center">
            <b>Regions</b>
          </h5>
          <Listgroup
            regions={regions}
            onReasonChange={handleReasonChange}
            selectedRegion={selectedRegion}
            country={country}
          ></Listgroup>
        </div>
      </div>
      <div className="row">
        <div className="col-12 px-2 d-flex justify-content-center pb-5">
          {Math.ceil(totalCount / pageSize) > 1 ? (
            <Pagination
              count={Math.ceil(totalCount / pageSize)}
              page={currentPage}
              onChange={handlePageChange}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Country;
