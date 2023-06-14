"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";
import { ThemeProvider } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

interface IProps {
  countries: object[];
}

interface ICustomMaterialTailwindTheme {
  select: {
    styles: {
      base: {
        container?: object;
        select?: object;
        label?: object;
        menu?: object;
        option?: {
          initial?: object;
          active?: object;
          disabled?: object;
        };
      };
    };
  };
}

const customTheme: ICustomMaterialTailwindTheme = {
  select: {
    styles: {
      base: {
        container: {
          position: "relative",
          maxWidth: "max-w-[100px]",
        },
        select: {
          border: "border-none",
          bg: "bg-white dark:bg-darkBlue",
        },
        menu: {
          border: "border-none",
          bg: "bg-white dark:bg-darkBlue",
        },
        label: {
          after: "after:border-none",
          before: "before:border-none",
        },
      },
    },
  },
};

const CountriesList = ({ countries }: IProps) => {
  const [search, setSearch] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  const handleChange = (e: any) => {
    setSelect(e);
  };

  return (
    <ThemeProvider value={customTheme}>
      <div className="container max-w-screen-mobile px-2 pb-10 tablet:max-w-screen-tablet laptop:max-w-screen-laptop desktop:max-w-screen-desktop">
        <div className="laptop:flex justify-between">
          <input
            className="w-full max-h-10 mt-6 laptop:mt-12 px-4 py-2 dark:bg-darkBlue outline-none dark:placeholder:text-white rounded-md shadow-md laptop:max-w-sm"
            type="search"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="mt-8 laptop:mt-12">
            <Select
              color="blue-gray"
              label="Filter by Region"
              onChange={handleChange}
            >
              <Option value="">All</Option>
              <Option value="Africa">Africa</Option>
              <Option value="Americas">America</Option>
              <Option value="Asia">Asia</Option>
              <Option value="Europe">Europe</Option>
              <Option value="Oceania">Oceania</Option>
            </Select>
          </div>
        </div>
        <ul className="container grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10 desktop:gap-14 max-w-xs mt-10 tablet:max-w-screen-tablet laptop:max-w-screen-laptop desktop:max-w-screen-desktop">
          {countries
            .filter((country: any) =>
              country.name.common.toLowerCase().includes(search.toLowerCase())
            )
            .filter((country: any) =>
              select !== "" ? country.region === select : true
            )
            .map((country: any) => (
              <li
                className="bg-white dark:bg-darkBlue rounded-md shadow-lg"
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
