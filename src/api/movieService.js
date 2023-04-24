import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH;

const createRequestUrl = ({
  url,
  path,
  searchBy,
  limit,
  offset,
  sortOrder,
  sortBy,
  query,
  genre,
}) => {
  return `${url}/${path}?search=${query}&searchBy=${searchBy}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}&limit=${limit}`;
};

export const getMovies = async ({
  searchBy = 'title',
  limit = 20,
  offset = 0,
  sortOrder = 'asc',
  genre,
  sortCriterion: sortBy,
  searchQuery: query,
}) => {
  try {
    const url = createRequestUrl({
      url: API_BASE_URL,
      path: API_BASE_PATH,
      searchBy,
      limit,
      offset,
      sortOrder,
      sortBy,
      query,
      genre,
    });

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getMovieByID = async (id) => {
  try {
    const url = `${API_BASE_URL}/${API_BASE_PATH}/${id}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// export const addMovie = async (data) => {
//   try {
//     const url = `${API_BASE_URL}/${API_BASE_PATH}`;
//     const response = await axios.request({
//       method: 'POST',
//       url: url,
//       data: data,
//     });

//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };

// export const deleteMovie = async (id) => {
//   try {
//     const url = createRequestUrl({
//       url: API_BASE_URL,
//       path: `${API_BASE_PATH}/${id}`,
//     });
//     const response = await axios.request({
//       method: 'DELETE',
//       url: url,
//     });

//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };

// export const editMovie = async (data) => {
//   try {
//     const url = `${API_BASE_URL}/${API_BASE_PATH}`;
//     const response = await axios.request({
//       method: 'PUT',
//       url: url,
//       data: data,
//     });

//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };
