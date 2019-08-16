const { colonia } = require('../models/Colonia');

exports.getallcol = ( req, resp ) => {
    colonia.find({}, function(err, respuesta) {
        let lstcolonia = [];
    
        respuesta.forEach(function(res) {
            lstcolonia.push({id: res.iIdColonia, nombre: res.cNombre});
        });
    
        resp.send(lstcolonia);  
      });
}

exports.registercol = (req, res) => {
    let param = req.body;
    let newColonia = colonia ({
        cNombre : param.cNombre
    });

    newColonia.save((err, data) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(data){
            res.status(201).json({status: 'Ok', data: data})
        }else{
            res.status(400).json({message:'No se creo la Colonia'});
        }
    });
}