const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const empresaSchema = new Schema({
  iIdEmpresa: Number,
  cNombre: String,
  cDireccion: String,
  iIdColonia:{
    type:Number
    /*type : Schema.Types.ObjectId,
    ref: 'colonias'*/
  },
  iIdCategoria:{ type:Number
    /*type : Schema.Types.ObjectId,
    ref: 'catergorias'*/
  }
});

empresaSchema.plugin(AutoIncrement, {inc_field:'iIdEmpresa'});

const empresa = mongoose.model('Empresa', empresaSchema);

module.exports = { empresa }