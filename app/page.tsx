import Link from "next/link";

const getData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

const Countries = async () => {
  const countries = await getData();

  return (
    <ul className="grid grid-cols-4 gap-16">
      {countries.map((country: any) => (
        <li>
          <Link href={`/country/${country.name.common}`}>
            <img
              className="w-full h-40"
              src={country.flags.png}
              alt={country.flags.alt}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
