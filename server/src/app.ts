/*Necessary imports*/
import express, { Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import connectDB from './db';


const app = express();
const server = http.createServer(app);
const PORT = 3001; // Setting up the PORT - Hope it's not lost at sea!
connectDB();
app.use(cors()); // Using CORS because sharing is caring, even for servers.
dotenv.config(); // Configuring environment variables - Secrets, like hiding snacks in the server room.
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world'); // Sending greetings to the vast digital cosmos.
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Broadcasting to the localhost neighborhood. 
});