const BASE_URL = "https://rickandmortyapi.com/api";

const fetchAPI = async (path) => {
  const response = await fetch(`${BASE_URL}${path}`);
  const data = await response.json();
  return data;
};

const API = {
  character: async (page, status, gender, species) => {
    return await fetchAPI(
      `/character/?page=${page}&status=${status}&gender=${gender}&species=${species}`
    );
  },
  episodes: async (episode) => {
    return await fetchAPI(`/episode/${episode}`);
  },
  locations: async (location) => {
    return await fetchAPI(`/location/${location}`);
  },
  characterDetail: async (id) => {
    return await fetchAPI(`/character/${id}`);
  },
};

export default API;
