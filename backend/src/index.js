const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

dotenv.config();

require('./config/dbConfig');

app.use(cors());
app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});