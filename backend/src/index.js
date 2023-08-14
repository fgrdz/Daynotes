const express = require('express');
const routes = require('./routes')
const app = express();
const cors= require('cors');

require('./config/dbConfig');


app.use(cors());
app.use(express.json());
app.use(routes);

app.set('view engine', 'pug')

const port = process.env.PORT || 3333
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
