import React from "react";
import API from "../API";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/InputGroup";

const Episodes = () => {
  const [location, setLocation] = React.useState(1);
  const [results, setResults] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      const response = await API.locations(location);
      setData(response);

      const resp = await Promise.all(
        response.residents.map((character) => {
          return fetch(character)
            .then((res) => res.json())
            .catch((e) => e);
        })
      );
      setResults(resp);
    };
    load();
  }, [location]);

  if (data)
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">
            Location: <span className="text-primary">{data.name}</span>
          </h1>
          <h2 className="text-center fs-5">Dimension: {data.dimension}</h2>
          <p className="text-center fs-6">Type: {data.type}</p>
        </div>
        <div className="row">
          <div className="col-3">
            <InputGroup setInput={setLocation} name="Location" total={126} />
          </div>
          <div className="col">
            <div className="row">
              <Cards data={results} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Episodes;
