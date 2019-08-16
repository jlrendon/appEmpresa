const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoincrementId = require('../models/counterModel');

const categoriaSchema = new Schema({
  iIdCategoria: {type:Number, unique: true, min: 1},
  cNombre: {type:String}
    });

categoriaSchema.pre('save', function(next){
if(!this.isNew){
  next(); 
  return;
  }
autoincrementId('Categoria', this, next);
});

const categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = {categoria}