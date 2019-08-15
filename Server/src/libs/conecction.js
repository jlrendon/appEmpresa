const mongoose = require('mongoose');
let db;
module.exports = function Connection(){
    if(!db){
       db = mongoose.connect(process.env.mongourl, '', (err)=>{
            if(!err){
                console.log('CONEXION REALIZADA CORRECTAMENTE');
            }
        });
        return db;
    }
}

