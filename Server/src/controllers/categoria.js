const { categoria } = require('../models/Categoria');

exports.getall = ( req, resp ) => {
    categoria.find({}, (err, respuesta)=> {
        let lstcategoria = {};

        respuesta.forEach(function(res) {
            lstcategoria[res._id] = res;
        });    
        resp.send(lstcategoria);  
      });
}

exports.register = (req, res) => {

    let param = req.body;
    let newCategoria = categoria ({
        cNombre: param.cNombre,
      //  iIdCategoria: param.iIdCategoria
       /* iIdCateoria: 0*/
    });

    newCategoria.save((err, resp) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(resp){
            res.status(201).json({status: 'Ok', data: resp})
        }else{
            res.status(400).json({message:'No se creo la categoria'});
        }
    });
}


