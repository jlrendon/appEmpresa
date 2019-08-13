const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categoriaSchema = new Schema({
  iIdCategoria: Number,
  cNombre: String
    });

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria