import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api.route.js';

const app = express();

app.use(cors({
  origin: process.env.CLIENT_HOST,
}));

app.use(express.json());

app.use(apiRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});