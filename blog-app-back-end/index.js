import express from 'express';
import Connection from './database/db.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const username = process.env.db_username;
const password = process.env.db_password;
Connection(username, password);