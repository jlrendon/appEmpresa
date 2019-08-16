const { categoria } = require('../models/Categoria');

exports.getall = ( req, resp ) => {
    categoria.find({}, (err, respuesta)=> {
        let lstcategoria = [];

        respuesta.forEach(function(res) {
            lstcategoria.push({id: res.iIdCategoria, nombre: res.cNombre});
        });    
        resp.send(lstcategoria);  
      });
}

exports.register = (req, res) => {

    let param = req.body;
    let newCategoria = categoria ({
        cNombre: param.cNombre
    });

    newCategoria.save((err, data) =>{
        if(err){
            res.status(500).json({message: 'Ocurrio un error', err});
        }else if(data){
            res.status(201).json({status: 'Ok', data: data})
        }else{
            res.status(400).json({message:'No se creo la categoria'});
        }
    });
}


