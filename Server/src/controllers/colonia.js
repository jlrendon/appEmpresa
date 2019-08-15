const { colonia } = require('../models/Colonia');

exports.getall = ( req, resp ) => {
    colonia.find({}, function(err, respuesta) {
        let lstcolonia = {};
    
        respuesta.forEach(function(res) {
            lstcolonia[res._id] = res;
        });
    
        res.send(lstcolonia);  
      });
}