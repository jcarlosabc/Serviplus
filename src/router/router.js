const {Router} = require('express');
const router = Router();
var controllerRuta = require('../controllers/controllerRuta')


// ==>> ......... Registro empresas ......... <<==
router.post('/registrarEmpresas', controllerRuta.registrarEmpresas);

// ==>> ......... Buscar ......... <<==
router.get('/buscar/:id', controllerRuta.buscar);

// ==>> ......... Listar ......... <<==
router.get('/listar/:id?', controllerRuta.listar_datos);

// ==>> ......... Actualizar Empresa......... <<==
router.put('/actualizar/:id', controllerRuta.update_empresa);

// ==>> ......... Delete Empresa......... <<==
router.delete('/delete/:id', controllerRuta.delete_empresa);

module.exports = router;