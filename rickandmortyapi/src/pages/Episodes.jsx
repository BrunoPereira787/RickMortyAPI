import React from "react";
import API from "../API";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/InputGroup";

const Episodes = () => {
  const [episode, setEpisode] = React.useState(1);
  const [results, setResults] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      const response = await API.episodes(episode);
      setData(response);

      const resp = await Promise.all(
        response.characters.map((character) => {
          return fetch(character)
            .then((res) => res.json())
            .catch((e) => e);
        })
      );
      setResults(resp);
    };
    load();
  }, [episode]);

  if (data)
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">
            Episodio name : <span className="text-primary">{data.name}</span>
          </h1>
          <p className="text-center">Air Date: {data.air_date}</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12">
            <InputGroup setInput={setEpisode} name="Episode" total={51} />
          </div>
          <div className="col-lg col-12">
            <div className="row">
              <Cards data={results} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Episodes;
