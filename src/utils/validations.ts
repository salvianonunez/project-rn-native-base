export const isEmptyString = (value: string) => {
  const data = value.replace( /\s/g, '');
  return data.length === 0;
};

export const validStringRange = ( value:string, min: number, max: number) =>{
  return (value.length >= min && value.length <= max)

};

export const validStringLength = ( value:string, length: number) =>{
  return value.length === length;
};
