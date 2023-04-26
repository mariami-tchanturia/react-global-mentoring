import axios from 'axios';

import { GET_MOVIES_URL, GET_MOVIE_URL } from './contants';

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
    const url = GET_MOVIES_URL({
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
    const url = GET_MOVIE_URL(id);

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
