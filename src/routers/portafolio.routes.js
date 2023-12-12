const{Router} = require('express')

const router = Router()

const { deletePortafolio, updatePortafolio, renderEditPortafolioForm, renderAllPortafolios, createNewPortafolio, renderPortafolioForm, renderPortafolio } = require('../controllers/portafolio.controllers.js')

// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/add', renderPortafolioForm)

// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR EN BDD
router.post('/portafolio/add', createNewPortafolio)

// RUTA PARA PRESENTAR TODOS LOS PORTAFOLIOS
router.get('/portafolios', renderAllPortafolios)
// RUTA PARA PRESENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id', renderPortafolio)

router.get('/portafolio/edit/:id', renderEditPortafolioForm)
router.put('/portafolio/edit/:id', updatePortafolio)

router.delete('/portafolio/delete/:id', deletePortafolio)

module.exports = router