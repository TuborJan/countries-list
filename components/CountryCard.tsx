import Link from "next/link";

interface IProps {
  country: any;
}

const CountryCard = ({ country }: IProps) => {
  return (
    <Link href={`/${country.name.common}`}>
      <img
        className="w-full h-40"
        src={country.flags.png}
        alt={country.flags.alt}
      />
    </Link>
  );
};

export default CountryCard;
