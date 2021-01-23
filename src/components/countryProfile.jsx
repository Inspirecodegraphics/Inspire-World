import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const CountryData = ({ country }) => {
  return (
    <section className="pb-3 text-left">
      <div className="row">
        {country.map((country, index) => (
          <div key={index} className="col-md-4 col-lg-3 px-md-2">
            <div className="card promoting-card px-lg-0 mb-3 hoverable">
              <div
                className="card-img-box px-3 pt-3"
                style={{ overflow: "hidden" }}
              >
                <img
                  className="card-img-top"
                  src={country.flag}
                  alt={country.name}
                />
              </div>

              <div className="card-body p-3">
                <Tooltip title={country.name} arrow placement="bottom">
                  <h4 className="card-title black-text font-weight-bolder mb-0">
                    {/* <i class="fa fa-globe fa-spin" aria-hidden="true"></i>{" "} */}
                    <img
                      src="https://www.flaticon.com/svg/vstatic/svg/44/44536.svg?token=exp=1611388669~hmac=3d696bc505c8dc0ec0df7ed68cab647d"
                      alt=""
                      width="20"
                      className="mr-1"
                    />
                    {country.name}
                  </h4>
                </Tooltip>
                <hr className="my-2" />
                <p className="mb-1">
                  Region: <b>{country.region}</b>
                </p>
                <p className="mb-1">
                  Capital city: <b>{country.capital}</b>
                </p>
                <p className="mb-1">
                  Native name: <b>{country.nativeName}</b>
                </p>
                <p className="mb-1">
                  Population: <b>{country.population}</b>
                </p>
                <p className="mb-1">
                  Area: <b>{country.area}</b>
                </p>
                <div className="text-right">
                  <Link
                    className="read-more btn-flat red-text p-1 mr-0 mml-1"
                    to={`/country/${country.alpha3Code.toLowerCase()}`}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryData;
