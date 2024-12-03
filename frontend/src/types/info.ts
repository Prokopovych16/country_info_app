export interface CountryInformation {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderInfo[] | null;
}

export interface BorderInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderInfo[] | null; 
}

export interface PopChart {
  year: string;
  value: string;
}

export interface GeneralInfo {
  flag: string;
  iso3: string;
}