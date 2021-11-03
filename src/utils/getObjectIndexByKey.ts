const getObjectIndexByKey = (array: [ any ], key: any, value: string | number): number => {
  for (let i = 0; i < array.length; ++i) {
    if (array[i][key] === value) return i;
  }
  return -1; 
}

export default getObjectIndexByKey;
