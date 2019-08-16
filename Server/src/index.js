const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const conexion = require('./libs/conecction');
const { register, getall } = require('./controllers/categoria');
const { registercol, getallcol } = require('./controllers/colonia');
const { registerprod, getallprod } = require('./controllers/producto');
const { registeremp, getallemp } = require('./controllers/empresa');
const { registerrel, getAllRegistros } = require('./controllers/relempresaproducto');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`<h1>SERVER</h1>`);
})

app.get('/getAllCategoria', getall);
app.post('/new/categoria', register);

app.get('/getAllColonia', getallcol);
app.post('/new/colonia', registercol);

app.get('/getAllProducto', getallprod);
app.post('/new/producto', registerprod);

app.get('/getAllEmpresa', getallemp)
app.post('/new/Empresa', registeremp);

app.get('/getAllEmpresaProducto', getAllRegistros);
app.post('/new/relEmpresaProducto', registerrel);

app.listen(3000, () => {
    console.log(`INICIANDO SERVER DE DEVf`)
})