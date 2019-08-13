const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

const RelEmpresaProducto = mongoose.model('RelEmpresaProducto', relEmpresaProductoSchema);

module.exports = RelEmpresaProducto