const { empresa } = require('../models/Empresa');

exports.registeremp = (req, res) => {
    let param = req.body;
    let newEmpresa = empresa ({
        cNombre : param.cNombre,
        cDireccion : param.cDireccion,
        iIdColonia : param.iIdColonia,
        iIdCategoria : param.iIdCategoria
    });

    newEmpresa.save((err, data) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(data){
            res.status(201).json({status: 'Ok', data: data})
        }else{
            res.status(400).json({message:'No se creo la Empresa'});
        }
    });
}


exports.getallemp = ( req, resp ) => {
    empresa.find({}, (err, respuesta)=> {
        let lstEmpresa = {};

        respuesta.forEach(function(res) {
            lstEmpresa[res._id] = res;
        });    
        resp.send(lstEmpresa);  
      });
}