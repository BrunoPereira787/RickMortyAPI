import React from "react";
import API from "../API";
import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/Filters";
import Pagination from "../components/Paginations/Pagination";

const Home = () => {
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [status, setStatus] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [species, setSpecies] = React.useState("");

  React.useEffect(() => {
    const load = async () => {
      const response = await API.character(page, status, gender, species);
      setData(response);
    };
    load();
  }, [page, status, gender, species]);

  if (data && data.error) return <div className="">{data.error}</div>;

  if (data)
    return (
      <>
        <div className="container">
          <div className="row">
            <Filters
              setStatus={setStatus}
              setPage={setPage}
              setGender={setGender}
              setSpecies={setSpecies}
            />
            <div className="col">
              <div className="row">
                <Cards data={data.results} />
              </div>
            </div>
          </div>
        </div>

        <Pagination page={page} setPage={setPage} info={data.info} />
      </>
    );
};

export default Home;
