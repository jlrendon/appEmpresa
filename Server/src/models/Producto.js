const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productoSchema = new Schema({
  iIdProducto: Number,
  cNombre: String
    });

productoSchema.plugin(AutoIncrement, { inc_field:'iIdProducto' });
const producto = mongoose.model('Producto', productoSchema);

module.exports = { producto }