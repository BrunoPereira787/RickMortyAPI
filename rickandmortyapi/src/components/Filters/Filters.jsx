import React from "react";
import Gender from "./Categories/Gender";
import Species from "./Categories/Species";
import Status from "./Categories/Status";

const Filters = ({ setPage, setStatus, setGender, setSpecies }) => {
  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>
      <div
        onClick={() => {
          setPage(1);
          setGender("");
          setStatus("");
          setSpecies("");
        }}
        style={{ cursor: "pointer" }}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPage={setPage} setStatus={setStatus} />
        <Gender setPage={setPage} setGender={setGender} />
        <Species setPage={setPage} setSpecies={setSpecies} />
      </div>
    </div>
  );
};

export default Filters;
