const { categoria } = require('../models/Categoria');

exports.getall = ( req, resp ) => {
    categoria.find({}, function(err, respuesta) {
        let lstcategoria = {};
    
        respuesta.forEach(function(res) {
            lstcategoria[res._id] = res;
        });
    
        res.send(lstcategoria);  
      });
}