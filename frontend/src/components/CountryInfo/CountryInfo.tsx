import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader.tsx';
import { CountryInformation, GeneralInfo } from '../../types/info.ts';
import { PopulationChart } from '../PopulationChart/PopulationChart.tsx';

const SERVER_HOST = 'http://localhost:5001';
const axiosInstance = axios.create({
  baseURL: SERVER_HOST,
});

export const CountryInfo = () => {
  const { countryCode } = useParams();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [countryInfo, setCountryInfo] = useState<CountryInformation | null>(
    null,
  );
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo | null>(null);
  const [population, setPopulation] = useState<[]>([]); // create graph

  console.log(population);

  useEffect(() => {
    const fetchData = async () => {
      setLoaded(false);
      try {
        const [countryResponse, flagResponse] = await Promise.all([
          axiosInstance.get(`/api/countries/info/${countryCode}`),
          axiosInstance.get(`/api/flags/${countryCode}`),
        ]);

        setCountryInfo(countryResponse.data);
        setGeneralInfo(flagResponse.data.info);

        const iso3 = flagResponse.data.info.iso3;

        if (iso3) {
          const populationResponse = await axiosInstance.get(
            `/api/population/${iso3}`,
          );
          setPopulation(populationResponse.data.data.populationCounts);
        }
        setLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [countryCode]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <div>
      <Link to="/" className="">
        BACK
      </Link>

      <section className="flex flex-col md:flex-row gap-8 justify-between mt-[50px]">
        <div>
          <h1 className="text-4xl font-bold mb-2">{countryInfo?.commonName}</h1>
          <p className="text-[16px]">{countryInfo?.officialName}</p>
        </div>
        <img
          className="w-full md:w-[150px] h-auto border-2 border-gray-500"
          src={generalInfo?.flag}
          alt="Country flag"
        />
      </section>

      <section className="mt-[50px]">
        <div className="flex flex-col w-full md:w-[30%]">
          <h2 className="mb-[10px] text-[24px] font-bold">It borders with</h2>
          <div className="flex flex-wrap gap-4">
            {countryInfo?.borders?.length ? (
              countryInfo.borders.map((border) => (
                <Link
                  className="flex-auto bg-gray-300 rounded-lg p-3 hover:shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-150"
                  to={`/country/${border.countryCode}`}
                  key={border.countryCode}>
                  {border.commonName}
                </Link>
              ))
            ) : (
              <p>No bordering countries available.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mt-[50px]">
        <h2 className="text-center mb-[10px] text-[24px] font-bold">
          Population Graph
        </h2>
        <PopulationChart data={population} />
      </section>
    </div>
  );
};
