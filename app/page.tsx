import CountriesList from "@/components/CountriesList";
import { getData } from "@/service/getCountries";

const Countries = async () => {
  const countries: object[] = await getData();

  return (
    <>
      <CountriesList countries={countries} />
    </>
  );
};

export default Countries;
