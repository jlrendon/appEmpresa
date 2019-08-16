const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const coloniaSchema = new Schema({
  iIdColonia: Number,
  cNombre: String,
  lActivo: {type:Boolean, default: true },
  dtAlta: {type:Date, default: Date.now}
});
coloniaSchema.plugin(AutoIncrement, { inc_field:'iIdColonia' });

const colonia = mongoose.model('Colonia', coloniaSchema);

module.exports = { colonia }