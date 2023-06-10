import { Metadata } from "next";

const getData = async (name: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  return response.json();
};

type Props = {
  params: {
    name: string;
  };
};

export const generateMetadata = async ({
  params: { name },
}: Props): Promise<Metadata> => {
  const country = await getData(name);

  return {
    title: country.name,
  };
};

const Country = async ({ params: { name } }: Props) => {
  const country = await getData(name);

  return (
    <div>
      <h1 className="text-2xl font-bold">{country[0].name.common}</h1>
      <img src={country[0].flags.png} alt={country[0].flags.alt} />
    </div>
  );
};

export default Country;
