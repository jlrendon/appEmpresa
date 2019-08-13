const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  iIdProducto: Number,
  cNombre: String
    });

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto