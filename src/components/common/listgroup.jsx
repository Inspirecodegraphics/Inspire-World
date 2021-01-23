import React from "react";

const Listgroup = ({ regions, country, selectedRegion, onReasonChange }) => {
  let liClasses =
    "list-group-item d-flex justify-content-between align-items-center";
  return (
    <ul className="list-group list-group-flush">
      {regions.map((r, index) =>
        r.length !== 0 ? (
          <li
            style={{ cursor: "pointer" }}
            key={index}
            className={selectedRegion === r ? liClasses + " active" : liClasses}
            onClick={() => onReasonChange(r)}
          >
            {r}
            {r ? (
              <span className="badge badge-light badge-pill">
                {country.filter((c) => c.region === r).length}
              </span>
            ) : null}
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
};

export default Listgroup;
