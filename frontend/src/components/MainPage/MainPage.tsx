import React from "react";
import { ListCountries } from "../ListCountries/ListCountries.tsx";

export const MainPage = () => {
  return (
    <div >
      <h1 className="text-4xl font-bold mb-6">Available Countries</h1>
      <ListCountries />
    </div>
  );
}