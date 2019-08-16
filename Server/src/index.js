const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const conexion = require('./libs/conecction');
const { register, getall } = require('./controllers/categoria');
const { registercol, getallcol } = require('./controllers/colonia');
const { registerprod, getallprod } = require('./controllers/producto');
const { registeremp} = require('./controllers/empresa');
const cors = require('cors');

 app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send(`<h1>SERVER</h1>`);
    }) 

app.get('/getAllCategoria', getall);
app.post('/new/categoria', register);

app.get('/getAllColonia', getallcol);
app.post('/new/colonia', registercol);

app.get('/getAllProducto', getallprod);
app.post('/new/producto', registerprod);

app.post('/new/Empresa', registeremp);

app.listen(3000, () => {
    console.log(`INICIANDO SERVER DE DEVf`)
})