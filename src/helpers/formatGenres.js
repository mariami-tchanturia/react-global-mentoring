export const formatGenres = (genres) =>
  genres?.map((genre) => genre.label).join(', ');
