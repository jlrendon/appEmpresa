const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coloniaSchema = new Schema({
  iIdColonia: Number,
  cNombre: String,
  lActivo: Boolean,
  dtAlta: String
    });

const colonia = mongoose.model('Colonia', coloniaSchema);

module.exports = { colonia }