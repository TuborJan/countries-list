import { getCountyByName } from "@/service/getCountries";
import { Metadata } from "next";
import Link from "next/link";
import { Router } from "next/router";

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
    <li>
      <Link href={`/${country.name.common}`}>{country.name.common}</Link>
    </li>
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

  //get native lang for country native name
  let nativeLang = "";
  for (let key in country[0].name.nativeName) {
    nativeLang = key;
    break;
  }

  return (
    <div className="container grid grid-cols-1 gap-10 max-w-sm px-6">
      <Link href={"/"}>Back</Link>
      <img src={country[0].flags.png} alt={country[0].flags.alt} />
      <h1 className="text-2xl font-bold">{country[0].name.common}</h1>
      <p>
        Native Name:{" "}
        <span>
          {country[0].name.nativeName
            ? `${country[0].name.nativeName[nativeLang].official}`
            : "None"}
        </span>
      </p>
      <p>
        Population: <span>{country[0].population}</span>
      </p>
      <p>
        Region: <span>{country[0].region ? country[0].region : "None"}</span>
      </p>
      <p>
        Sub Region:{" "}
        <span>{country[0].subregion ? country[0].subregion : "None"}</span>
      </p>
      <p>
        Capital: <span>{country[0].capital ? country[0].capital : "None"}</span>
      </p>
      <ul className="">
        {country[0].borders && (await getBorderCountryName(country[0].borders))}
      </ul>
    </div>
  );
};

export default Country;
