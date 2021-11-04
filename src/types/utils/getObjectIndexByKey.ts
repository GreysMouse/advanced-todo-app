type TObjectValue = string | number;

interface IObject {
  [ key: string ]: TObjectValue;
}

export type { TObjectValue, IObject };
