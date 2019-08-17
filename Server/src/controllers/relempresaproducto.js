const { empresaproducto } = require('../models/EmpresaProducto');


exports.registerrel = (req, res) => {
    let param = req.body;
   // console.log(param);
    let newEmpresaProducto = empresaproducto ({
        iIdEmpresa : param.iIdEmpresa,
        iIdProducto : param.iIdProducto,
        dPrecio : param.dPrecio,
        iDisponible : param.idispo
    });
   console.log(newEmpresaProducto);
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

exports.getAllRegistros = (req, resp) =>{
    /*empresaproducto.findOne({ }).
    populate({
      path: 'Producto',
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: 'Producto' }
    });*/
    /*empresaproducto.find({}, (err, respuesta) => {
        let lstempresaproducto = []; 

        respuesta.forEach(function(res) {
            lstempresaproducto.push({id: res.iIdRelEmpresaProducto, dPrecio: res.dPrecio, iDisponible: res.iDisponible});
        });    
        resp.send(lstempresaproducto);  
      });*/

      empresaproducto.findOne()
                .populate({ path: 'empresas', select: 'cNombre'})
                .exec(function(err, data){
                    if(err) return handleError(err);
                    console.log(data);

                    resp.send(data);

                });


}

