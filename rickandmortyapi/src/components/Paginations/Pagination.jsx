import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, info, setPage }) => {
  return (
    <ReactPaginate
      className="pagination d-flex justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      activeClassName="active"
      pageLinkClassName="page-link"
      nextClassName="btn btn-primary"
      forcePage={page === 1 ? 0 : page - 1}
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
      pageCount={info.pages}
    />
  );
};

export default Pagination;
