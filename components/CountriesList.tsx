"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";
import { ThemeProvider } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

interface IProps {
  countries: any;
}

const CountriesList = ({ countries }: IProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <ThemeProvider>
      <div className="container max-w-screen-mobile px-2">
        <input
          className="w-full mt-6 px-4 py-4 rounded-md"
          type="search"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select label="test">
          <Option>Test</Option>
        </Select>
        <ul className="container grid grid-cols-1 gap-10 max-w-xs mt-10 px-6">
          {countries
            .filter((country: any) =>
              country.name.common.toLowerCase().includes(search.toLowerCase())
            )
            .map((country: any) => (
              <li
                className="bg-white rounded-md hover:shadow-lg"
                key={country.name.common}
              >
                <CountryCard country={country} />
              </li>
            ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default CountriesList;
