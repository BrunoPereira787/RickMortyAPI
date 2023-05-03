import React from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const CardDetails = () => {
  const { id } = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      const response = await API.characterDetail(id);
      setData(response);
    };
    load();
  }, [id]);
  if (data)
    return (
      <div
        className="container d-flex justify-content-center flex-column mb-5"
        style={{ maxWidth: "25rem" }}
      >
        <h1 className="text-center">{data.name}</h1>
        <div className="card">
          <img
            src={data.image}
            className="card-img-top img-fluid"
            alt={data.name}
          />
          {(() => {
            if (data.status === "Dead") {
              return (
                <div className="card-body badge bg-danger fs-5 m-2">
                  {data.status}
                </div>
              );
            } else if (data.status === "Alive") {
              return (
                <div className="card-body badge bg-success fs-5 m-2">
                  {data.status}
                </div>
              );
            } else {
              return (
                <div className="card-body badge bg-secondary fs-5 m-2">
                  {data.status}
                </div>
              );
            }
          })()}
          <ul className="list-group list-group-flush">
            <li className="list-group-item fw-bold">
              Gender: <span className="fw-normal">{data.gender}</span>
            </li>
            <li className="list-group-item fw-bold">
              Location: <span className="fw-normal">{data.location.name}</span>
            </li>
            <li className="list-group-item fw-bold">
              Origin: <span className="fw-normal">{data.origin.name}</span>
            </li>
            <li className="list-group-item fw-bold">
              Species: <span className="fw-normal">{data.species}</span>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default CardDetails;
