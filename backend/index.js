import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});