import { getCountyByName } from "@/service/getCountries";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    name: string;
  };
};

//Countires by codes
const getCountiesByCodes = async (codes: object) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes}`
  );

  return response.json();
};

//Return bordered countires name
const getBorderCountryName = async (borders: object) => {
  const countries = await getCountiesByCodes(borders);

  return countries.map((country: any) => (
    <Link href={`/${country.name.common}`}>{country.name.common}</Link>
  ));
};

export const generateMetadata = async ({
  params: { name },
}: Props): Promise<Metadata> => {
  const country = await getCountyByName(name);

  return {
    title: country[0].name.common,
  };
};

const Country = async ({ params: { name } }: Props) => {
  const country = await getCountyByName(name);

  return (
    <div>
      <h1 className="text-2xl font-bold">{country[0].name.common}</h1>
      <img src={country[0].flags.png} alt={country[0].flags.alt} />
      {country[0].borders && (await getBorderCountryName(country[0].borders))}
    </div>
  );
};

export default Country;
