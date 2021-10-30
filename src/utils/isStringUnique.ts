const isStringUnique = (newString: string, existingStrings: string[]): boolean => {
  return existingStrings.indexOf(newString) === -1;
}

export default isStringUnique;
