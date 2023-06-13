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

//Bordered countires name
const getBorderCountryName = async (borders: object) => {
  const countries = await getCountiesByCodes(borders);

  return countries.map((country: any) => (
    <li className="py-1 rounded-sm shadow-lg text-center bg-white">
      <Link href={`/${country.name.common}`}>{country.name.common}</Link>
    </li>
  ));
};

//Languages used in country
const getLanguagesInCountry = (languages: any) => {
  let langCodes = [];

  for (let key in languages) {
    langCodes.push(key);
  }

  return langCodes.map((item) => <>{languages[item]}, </>);
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

  //get currency code
  let currency = "";
  for (let key in country[0].currencies) {
    currency = key;
    break;
  }

  return (
    <div className="container max-w-sm px-6 py-12">
      <Link href={"/"}>Back</Link>
      <img
        className="mt-16"
        src={country[0].flags.png}
        alt={country[0].flags.alt}
      />
      <h1 className="mt-14 text-2xl font-bold">{country[0].name.common}</h1>
      <ul>
        <li className="mt-4">
          {" "}
          Native Name:{" "}
          <span>
            {country[0].name.nativeName
              ? `${country[0].name.nativeName[nativeLang].official}`
              : "None"}
          </span>
        </li>
        <li className="mt-4">
          Population: <span>{country[0].population}</span>
        </li>
        <li className="mt-4">
          Region: <span>{country[0].region ? country[0].region : "None"}</span>
        </li>
        <li className="mt-4">
          Sub Region:{" "}
          <span>{country[0].subregion ? country[0].subregion : "None"}</span>
        </li>
        <li className="mt-4">
          Capital:{" "}
          <span>{country[0].capital ? country[0].capital : "None"}</span>
        </li>
        <li className="mt-4">
          Currencies:{" "}
          <span>
            {country[0].currencies
              ? country[0].currencies[currency].name
              : "None"}
          </span>
        </li>
        <li className="mt-4">
          Languages: <span>{getLanguagesInCountry(country[0].languages)}</span>
        </li>
      </ul>
      {country[0].borders && (
        <>
          <h3 className="mt-8 font-semibold text-lg">Border Countries:</h3>
          <ul className="grid grid-cols-3 gap-4 mt-4 text-sm">
            {await getBorderCountryName(country[0].borders)}
          </ul>
        </>
      )}
    </div>
  );
};

export default Country;
