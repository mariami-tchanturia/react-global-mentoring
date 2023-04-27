const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH;

export const GET_MOVIES_URL = ({
  url = API_BASE_URL,
  path = API_BASE_PATH,
  searchBy,
  limit,
  offset,
  sortOrder,
  sortBy,
  query,
  genre,
}) =>
  `${url}/${path}?search=${query}&searchBy=${searchBy}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}&limit=${limit}`;

export const GET_MOVIE_URL = (id) => `${API_BASE_URL}/${API_BASE_PATH}/${id}`;
