export const getData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (!response.ok) throw new Error("Unable to fetch countries!");

  return response.json();
};

export const getCountyByName = async (name: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!response.ok) throw new Error("Unable to fetch country!");

  return response.json();
};
