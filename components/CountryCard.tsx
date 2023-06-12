import Link from "next/link";

interface IProps {
  country: any;
}

const CountryCard = ({ country }: IProps) => {
  return (
    <Link href={`/${country.name.common}`}>
      <img
        className="w-full h-40 shadow-md rounded-l-md rounded-r-md rounded-b-none"
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <div className="flex flex-col px-6 py-6 pb-10 text-sm font-bold">
        <h3 className="text-xl">{country.name.common}</h3>
        <p className="mt-3 font-semibold">
          Population: <span className="font-normal">{country.population}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-normal">{country.region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-normal">{country.capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
