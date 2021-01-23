import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ height: "80vh" }}>
      <h1 className="text-center pt-5">404</h1>
      <p className="text-center pt-3" style={{ fontSize: "large" }}>
        Sorry the <b>Page</b> you are looking is not found.
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
    </div>
  );
};

export default NotFound;
