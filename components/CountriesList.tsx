"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

interface IProps {
  countries: any;
}

const CountriesList = ({ countries }: IProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <input
        type="search"
        placeholder={"search"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="grid grid-cols-4 gap-16">
        {countries
          .filter((country: any) =>
            country.name.common.toLowerCase().includes(search)
          )
          .map((country: any) => (
            <li key={country.name.common}>
              <CountryCard country={country} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountriesList;
