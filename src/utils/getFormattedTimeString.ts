const getFormattedTimeString = (): string => {
  const dateObj = new Date();

  const hours = ('0' + dateObj.getHours()).slice(-2);
  const minutes = ('0' + dateObj.getMinutes()).slice(-2);

  return hours + ':' + minutes;
}

export default getFormattedTimeString;
