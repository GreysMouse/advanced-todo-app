const getFormattedDateString = (): string => {
  const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  const dateObj = new Date();

  const day = days[ dateObj.getDay() ];
  const date = dateObj.getDate();
  const month = months[ dateObj.getMonth() ];

  return `${ day }, ${ date } ${ month }`;
}

export default getFormattedDateString;
