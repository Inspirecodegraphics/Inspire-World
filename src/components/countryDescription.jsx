import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import countryService from "../services/countryService";
import { useHistory } from "react-router-dom";

const CountryDescription = ({ countries }) => {
  const [country, setCountry] = useState({});
  let { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    let init = async () => {
      try {
        const country = await countryService.getCountryByCode(id);
        setCountry(country.data);
      } catch (error) {
        if (error.response.status === 400) {
          console.log("redirecting");
          history.replace("/not-found");
        }
      }
    };
    init();
  }, []);

  const borderCountries = (code) => {
    const country = countries.find((c) => c.alpha3Code === code);
    return country ? country.name : "";
  };
  return (
    <section className="pb-5">
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            className="card-img-top hoverable"
            src={country.flag}
            alt={country.name}
          />
        </div>
        <div className="col-md-6">
          <h2 className="card-title font-weight-bold mt-1">{country.name}</h2>
          <div className="row">
            <div className="col-6">
              <ul className="font-weight-bolder mt-2 country-data-list p-0">
                <li>
                  Capital: <b>{country.capital}</b>
                </li>
                <li>
                  Native Name: <b>{country.nativeName}</b>
                </li>
                <li>
                  Region: <b>{country.region}</b>
                </li>
                <li>
                  Subregion: <b>{country.subregion}</b>
                </li>
                <li>
                  Population: <b>{country.population}</b>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="font-weight-bolder mt-2 country-data-list p-0">
                <li>
                  Area: <b>{country.area}</b>
                  {country.area ? (
                    <b>
                      {" "}
                      Km<sup>2</sup>
                    </b>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  Native Language:{" "}
                  {country.languages ? (
                    <b>{country.languages.map((l) => l.nativeName + ", ")}</b>
                  ) : (
                    0
                  )}
                </li>
                <li>
                  Population: <b>{country.population}</b>
                </li>
                <li>
                  Timezone: <b>{country.timezones}</b>
                </li>
                <li>
                  Calling Codes:{" "}
                  {country.callingCodes ? <b>{country.callingCodes[0]}</b> : 0}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="card-title font-weight-bold my-2">
              Neighbour Countries
            </h4>

            <div className="">
              {/* d-inline-block */}
              {country.borders
                ? country.borders.map((b) => (
                    <a
                      className="read-more btn-flat red-text p-1 pr-3 mr-0 mml-1"
                      href={`/country/${b.toLowerCase()}`}
                    >
                      {borderCountries(b)}
                    </a>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDescription;
