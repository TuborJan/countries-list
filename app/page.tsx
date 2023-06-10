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
    <div>
      <h1 className="text-2xl font-bold">Blog page</h1>
      <ul>
        {countries.map((country: any) => (
          <li>
            <Link href={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
