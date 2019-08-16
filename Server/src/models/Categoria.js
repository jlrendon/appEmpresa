const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categoriaSchema = new Schema({
  iIdCategoria: Number,
  cNombre: String
    });
categoriaSchema.plugin(AutoIncrement, { inc_field:'iIdCategoria' });

const categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = {categoria}