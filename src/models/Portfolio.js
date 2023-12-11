// IMPORTAR EL ESQUEMA Y EL MODELO
const {Schema, model} = require('mongoose')

// CREAR UN NUEVO ESQUEMA -- PORTFOLIOSCHEMA
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

module.exports = model('portfolio',portfolioSchema)
