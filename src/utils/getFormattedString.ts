type TRegister = 'lowercase' | 'uppercase' | 'capitalize';

const getFormattedString = (string: string, register?: TRegister): string => {
  const defaultString = string.trim();
  
  switch(register) {
    case 'lowercase': return defaultString.toLowerCase();
    case 'uppercase': return defaultString.toUpperCase();
    case 'capitalize': {
      return defaultString.slice(0, 1).toUpperCase() + defaultString.slice(1).toLowerCase();
    }
    default: return defaultString;
  }
}

export default getFormattedString;
