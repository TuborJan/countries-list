export const getData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");

  return response.json();
};

export const getCountyByName = async (name: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  return response.json();
};

export const getCountyByCode = async (code: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  return response.json();
};
