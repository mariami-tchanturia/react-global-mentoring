export const getMovieDuration = (duration) => {
  let formatedDuration = '';
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;

  formatedDuration += hours > 0 ? `${hours}h` : ``;
  formatedDuration += minutes > 0 ? ` ${minutes}min` : ``;

  return formatedDuration;
};
