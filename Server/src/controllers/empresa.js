const { empresa } = require('../models/Empresa');

exports.registeremp = (req, res) => {
    let param = req.body;
    let newEmpresa = empresa ({
        iIdEmpresa : param.iIdEmpresa,
        cNombre : param.cNombre,
        cDireccion : param.cDireccion,
        iIdColonia : param.iIdColonia,
        iIdCategoria : param.iIdCategoria
    });

    newEmpresa.save((err, resp) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(resp){
            res.status(201).json({status: 'Ok', data: resp})
        }else{
            res.status(400).json({message:'No se creo la Empresa'});
        }
    });
}