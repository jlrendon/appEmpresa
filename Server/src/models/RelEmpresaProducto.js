const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const relEmpresaProductoSchema = new Schema({
iIdRelEmpresa_Producto: Number,
iIdEmpresa: Number,
iIdProducto:{
    type : Schema.Types.ObjectId,
    ref: 'productos'
  },
dPrecio: schema.type.decimal128,
iDisponible:Number
});
relEmpresaProductoSchema.plugin(AutoIncrement, {inc_field: 'iIdRelEmpresa_Producto'})

const RelEmpresaProducto = mongoose.model('RelEmpresaProducto', relEmpresaProductoSchema);

module.exports = RelEmpresaProducto