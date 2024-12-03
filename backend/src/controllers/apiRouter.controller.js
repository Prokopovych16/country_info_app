import axios from "axios";
import 'dotenv/config';

const getAllCountries = async (req, res) => {
    const response = await axios.get(process.env.LINK_COUNTRIES);
    res.json(response.data);
};

const getCountryInfo = async (req, res) => {
  const { countryCode } = req.params;

  const response = await axios.get(`${process.env.LINK_COUNTRIES_INFO}/${countryCode}`);
  res.json(response.data);
};

const getCountryFlag = async (req, res) => {
  const { countryCode } = req.params;

  // Fetch the flags data
  const response = await axios.get(process.env.LINK_COUNTRIES_IMG);
  const flags = response.data;

  // Find the flag matching the given countryCode
  const matchingFlag = flags.data.find((flag) => flag.iso2 === countryCode);
  console.log(matchingFlag);

  if (matchingFlag) {
    res.json({
      error: false,
      msg: 'Flag image retrieved successfully',
      info: matchingFlag,
    });
  } else {
    res.status(404).json({
      error: true,
      msg: 'No flag found for the given country code',
    });
  }
};

const getCountryPopulation = async (req, res) => {
  const { countryCode } = req.params;

  const response = await axios.get(`${process.env.LINK_COUNTRIES_POPULATION}`);
  const population = response.data;

  const matchingPopulation = population.data.find((pop) => pop.iso3 === countryCode);
  console.log(matchingPopulation);

  if (matchingPopulation) {
    res.json({
      error: false,
      msg: 'Flag image retrieved successfully',
      data: matchingPopulation,
    });
  } else {
    res.status(404).json({
      error: true,
      msg: 'No flag found for the given country code',
    });
  }
};


export const apiController = {
  getAllCountries,
  getCountryInfo,
  getCountryFlag,
  getCountryPopulation,
};