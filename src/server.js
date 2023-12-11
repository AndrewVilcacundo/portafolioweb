const express = require('express')
const path = require('path');

// Inicializaciones
const app = express()





// Configuraciones
// VARIABLES DE CONFIGURACION
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))


const { engine }  = require('express-handlebars')


// Configuraciones 
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

// Middlewares 
//SERVIDOR VA A TRABAJAR CON INFORMACION EN BASE A FORMULARIOS
app.use(express.urlencoded({extended:false}))


// Variables globales

// Rutas 
app.use(require('./routers/index.routes'))

// Archivos estáticos
// DEFINIR ARCHIVOS ESTÁTICOS Y PÚBLICOS
app.use(express.static(path.join(__dirname,'public')))


// EXPORTAR 
module.exports = app

