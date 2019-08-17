const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const relempresaproductoSchema = new Schema({
iIdRelEmpresaProducto: Number,
iIdEmpresa:{
    type : Schema.Types.ObjectId,
    ref: 'empresas'
   },
iIdProducto: {
      type : Schema.Types.ObjectId,
      ref: 'productos'
     },
dPrecio:Number,
iDisponible:Number
});

relempresaproductoSchema.plugin(AutoIncrement, {inc_field: 'iIdRelEmpresaProducto'})

const empresaproducto = mongoose.model('RelEmpresaProducto', relempresaproductoSchema);

module.exports = { empresaproducto }