import React from "react";
import { Link } from "react-router-dom";

const CountryData = ({ country }) => {
  return (
    <section className="pb-3 text-left">
      <div className="row">
        {country.map((country, index) => (
          <div key={index} className="col-md-4 col-lg-3 px-lg-2">
            <div className="card promoting-card px-lg-0 mb-4 hoverable">
              <div className="card-img-box" style={{ overflow: "hidden" }}>
                <img
                  className="card-img-top"
                  src={country.flag}
                  alt={country.name}
                />
              </div>

              <div className="card-body p-3">
                <h4 className="card-title font-weight-bolder mb-0">
                  {country.name}
                </h4>
                <hr className="my-2" />
                <p className="mb-0">
                  Region: <b>{country.region}</b>
                </p>
                <p className="mb-0">
                  Capital city: <b>{country.capital}</b>
                </p>
                <p className="mb-0">
                  Native name: <b>{country.nativeName}</b>
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
