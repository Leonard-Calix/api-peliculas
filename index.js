const express = require('express');
const { seeders } = require('./database/seeders');
const conexion = require('./database/conexion');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
seeders();

app.use('/api/peliculas', require('./routes/peliculas.router'))

app.listen(4000, () => console.log('Server on port http://localhost:4000/'))