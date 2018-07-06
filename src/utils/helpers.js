export const UNIX_TIME = 1531009800;
export const DATE = '2018-07-07';

export const toHHMMSS = (secNum) => {
  let days = Math.floor(secNum / 86400);
  let hours   = Math.floor((secNum - (days * 24 * 3600)) / 3600);
  let minutes = Math.floor((secNum - (days * 24 * 3600) - (hours * 3600)) / 60);
  let seconds = secNum - (days * 24 * 3600) - (hours * 3600) - (minutes * 60);

  if (hours   < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }

  return (days > 0 ? `${days} day(s) ` : '')
    + (hours > 0 ? `${hours} hour(s) ` : '')
    + (minutes > 0 ? `${minutes} minute(s) ` : '')
    + (seconds > 0 ? `${seconds} second(s) ` : '');
};