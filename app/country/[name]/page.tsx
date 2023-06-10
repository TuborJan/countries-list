import { getCountyByName } from "@/service/getCountries";
import { Metadata } from "next";

type Props = {
  params: {
    name: string;
  };
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
      {country[0].borders &&
        country[0].borders.map((items: any) => <p>{items}</p>)}
    </div>
  );
};

export default Country;
