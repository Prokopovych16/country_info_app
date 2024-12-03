import express from 'express';
import { catchError } from '../utils/catchErrors.js';
import { apiController } from '../controllers/apiRouter.controller.js';
import filterBorders from '../middlewares/bordersMiddleware.js';

export const apiRouter = new express.Router();

// get all countries
apiRouter.get('/api/countries', catchError(apiController.getAllCountries));

// get country info
apiRouter.get('/api/countries/info/:countryCode', filterBorders, catchError(apiController.getCountryInfo));

// get country flag + iso3
apiRouter.get('/api/flags/:countryCode', catchError(apiController.getCountryFlag));

// get countries population
apiRouter.get('/api/population/:countryCode', catchError(apiController.getCountryPopulation));

