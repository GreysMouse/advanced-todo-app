const getFormattedTimeString = (): string => {
  const dateObj = new Date();

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${ hours }:${ minutes }`;
}

export default getFormattedTimeString;
