import express from 'express';
import pool from './config/Database';
import router from './routes/routes';
import cors from 'cors';

const PORT = 3000;
const app = express();

pool.connect;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`Example app listening: http://localhost:${PORT}`)
  })