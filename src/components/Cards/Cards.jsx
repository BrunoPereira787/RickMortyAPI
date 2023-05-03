import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  if (data)
    return data.map((dat) => (
      <Link
        to={`/${dat.id}`}
        key={dat.id}
        className="col-lg-4 col-md-6 col-12 mb-3 position-relative"
      >
        <div className="border border-2 border-primary rounded">
          <img
            src={dat.image}
            alt={dat.name}
            className={`${styles.img} img-fluid`}
          />
          <div className="p-2">
            <h2 className="fs-4 fw-bold">{dat.name}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{dat.gender}</li>
              <li className="list-group-item">{dat.species}</li>
              <li className="list-group-item">{dat.location.name}</li>
            </ul>
          </div>

          {(() => {
            if (dat.status === "Dead") {
              return (
                <div
                  className={`${styles.status} position-absolute badge bg-danger`}
                >
                  {dat.status}
                </div>
              );
            } else if (dat.status === "Alive") {
              return (
                <div
                  className={`${styles.status} position-absolute badge bg-success`}
                >
                  {dat.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.status} position-absolute badge bg-secondary`}
                >
                  {dat.status}
                </div>
              );
            }
          })()}
        </div>
      </Link>
    ));
};

export default Cards;
