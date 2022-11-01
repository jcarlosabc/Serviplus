const {Router} = require('express');
const router = Router();
var controllerRuta = require('../controllers/controllerRuta')


// ==>> ......... Registro de tickets ......... <<==
router.post('/generar_tickets', controllerRuta.generar_tickets);

// ==>> ......... Buscar casos ......... <<==
router.get('/buscar/:id', controllerRuta.buscar);

// ==>> ......... Listar ......... <<==
router.get('/listar/:id?', controllerRuta.listar_datos);

// ==>> ......... Actualizar tickets......... <<==
router.put('/actualizar/:id', controllerRuta.update_tickets);

// ==>> ......... Delete tickets......... <<==
router.delete('/delete/:id', controllerRuta.delete_tickets);

module.exports = router;