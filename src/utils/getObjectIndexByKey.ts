import { TObjectValue, IObject } from '../types/utils/getObjectIndexByKey';

const getObjectIndexByKey = (array: IObject[], key: string, value: TObjectValue): number => {
  for (let i = 0; i < array.length; ++i) {
    if (array[ i ][ key ] === value) return i;
  }
  return -1; 
}

export default getObjectIndexByKey;
