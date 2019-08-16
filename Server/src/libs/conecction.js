const mongoose = require('mongoose');

 mongoose.connect('mongodb+srv://devfmicho:Ant0l0g14n0m4s33@devfmongo-qxuf1.gcp.mongodb.net/test?retryWrites=true&w=majority', 
                  {useNewUrlParser: true}, (err)=>{
            if(!err){
                console.log('CONEXION REALIZADA CORRECTAMENTE');
            }
        })
       