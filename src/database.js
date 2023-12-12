// IMPORTAR MONGOOSE
const mongoose = require('mongoose')

// CADENA DE CONEXION A LA BDD
//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'
MONGODB_URI = "mongodb://localhost:27017/portafolio"

// CREAR UN METODO PARA HACER LA CADENA DE CONEXION

connection = async()=>{
    try {
        // INVOCAR EL METODO CONNECT
         await mongoose.connect(MONGODB_URI)
         // RESPUESTA DE LA PROMESA == "ERROR"
        console.log("Database is connected")
    } catch (error) {
        //RESPUESTA DE LA PROMESA == "ERROR"

        console.log(error);
    }
}

module.exports = connection

