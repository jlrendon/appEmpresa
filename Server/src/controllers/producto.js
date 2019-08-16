const { producto } = require('../models/Producto');

exports.registerprod = (req, res) => {
    let param = req.body;
    let newProducto = producto ({
        cNombre : param.cNombre
    });

    newProducto.save((err, data) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(data){
            res.status(201).json({status: 'Ok', data: data})
        }else{
            res.status(400).json({message:'No se creo la Producto'});
        }
    });
}

exports.getallprod = ( req, resp ) => {
    producto.find({}, function(err, respuesta) {
        let lstProducto = [];
    
        respuesta.forEach(function(res) {
            lstProducto.push({id: res.iIdProducto, nombre: res.cNombre});
        });
    
        resp.send(lstProducto);  
      });
}

