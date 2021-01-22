import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationComp = ({ pageSize, page, handleChange }) => {
  return (
    <div>
      <Pagination count={pageSize} page={page} onChange={handleChange} />
    </div>
  );
};

export default PaginationComp;
