const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const conexion = require('./libs/conecction');
const { register, getall } = require('./controllers/categoria');
const { registercol, getallcol } = require('./controllers/colonia');

app.listen(3000, ()=> {
    console.log(`INICIANDO SERVER DE DEVf`)
 })

 app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send(`<h1>SERVER</h1>`);
    }) 

app.get('/getall', getall);
app.post('/new/categoria', register);

app.get('/getallColonia', getallcol);
app.post('/new/colonia', registercol);


module.exports = app;