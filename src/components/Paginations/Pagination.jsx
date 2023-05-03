import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, info, setPage }) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style>
        {`
          .next a,
          .prev a {
            color: #fff;
          }

          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 12px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination d-flex justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary next"
        pageClassName="page-item"
        activeClassName="active"
        pageLinkClassName="page-link"
        nextClassName="btn btn-primary prev"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        forcePage={page === 1 ? 0 : page - 1}
        onPageChange={(data) => {
          setPage(data.selected + 1);
        }}
        pageCount={info.pages}
      />
    </>
  );
};

export default Pagination;
