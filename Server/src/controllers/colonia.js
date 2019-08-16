const { colonia } = require('../models/Colonia');

exports.getallcol = ( req, resp ) => {
    colonia.find({}, function(err, respuesta) {
        let lstcolonia = {};
    
        respuesta.forEach(function(res) {
            lstcolonia[res._id] = res;
        });
    
        res.send(lstcolonia);  
      });
}

exports.registercol = (req, res) => {
    let param = req.body;
    let newColonia = colonia ({
        iIdColonia : param.iIdColonia,
        cNombre : param.cNombre,//"Los Heroes Amp. 02",
        lActivo : true,
        dtAlta  : Date.now.toString()
    });

    newColonia.save((err, resp) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(resp){
            res.status(201).json({status: 'Ok', data: resp})
        }else{
            res.status(400).json({message:'No se creo la Colonia'});
        }
    });
}