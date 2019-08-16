const { empresaproducto } = require('../models/RelEmpresaProducto');


exports = getAllRegistros = (req, resp) =>{
    /*empresaproducto.findOne({ }).
    populate({
      path: 'Producto',
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: 'Producto' }
    });*/
    empresaproducto.find({}, (err, respuesta)=> {
        let lstempresaproducto = [];

        respuesta.forEach(function(res) {
            lstempresaproducto.push({id: res.iIdCategoria, nombre: res.cNombre});
        });    
        resp.send(lstempresaproducto);  
      });
}


exports.registerempresaproducto = (req, res) => {
    let param = req.body;
    let newEmpresaProducto = empresaproducto ({
        iIdEmpresa : param.iIdEmpresa,
        iIdProducto : param.iIdProducto,
        dPrecio : param.dPrecio,
        iDisponible : param.iDisponible
    });
   // console.log(newEmpresaProducto);
    newEmpresaProducto.save((err, data) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(data){
            res.status(201).json({status: 'Ok', data: data})
        }else{
            res.status(400).json({message:'No se creo la Producto'});
        }
    });
}