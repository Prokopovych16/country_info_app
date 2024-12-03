import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Country } from '../../types/countries';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader.tsx';

export const ListCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // get all countries
  useEffect(() => {
    setLoaded(false);
    setError(null);

    axios
      .get('http://localhost:5001/api/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {countries.map((country) => {
        return <Link key={country.name} to={`/country/${country.countryCode}`} className="flex-auto w-full sm:w-1/3 md:w-1/4 bg-gray-300 rounded-lg p-3 hover:shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-150">{country.countryCode} - {country.name}</Link>
      })}
    </div>
  );
}