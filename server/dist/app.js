"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Necessary imports*/
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 3001; // Setting up the PORT - Hope it's not lost at sea!
(0, db_1.default)();
app.use((0, cors_1.default)()); // Using CORS because sharing is caring, even for servers.
dotenv_1.default.config(); // Configuring environment variables - Secrets, like hiding snacks in the server room.
app.get('/', (req, res) => {
    res.send('Hello world'); // Sending greetings to the vast digital cosmos.
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Broadcasting to the localhost neighborhood. 
});
