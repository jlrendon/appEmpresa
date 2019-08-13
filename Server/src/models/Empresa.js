const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const empresaSchema = new Schema({
  iIdEmpresa: Number,
  cNombre: String,
  cDireccion: String,
  iIdColonia:{
    type : Schema.Types.ObjectId,
    ref: 'colonias'
  },
  iIdCategoria:{
    type : Schema.Types.ObjectId,
    ref: 'catergorias'
  }
    });

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa