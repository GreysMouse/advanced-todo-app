type TObjectValue = string | number;

const getObjectIndexByKey = (array: any[], key: string, value: TObjectValue): number => {
  for (let i = 0; i < array.length; ++i) {
    if (array[ i ][ key ] === value) return i;
  }
  return -1; 
}

export default getObjectIndexByKey;
