import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const username = process.env.db_username;
const password = process.env.db_password;
Connection(username, password);