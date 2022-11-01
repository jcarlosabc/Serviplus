var mongoose = require('mongoose')
var schema = mongoose.Schema;

var rutaSchema = schema({
    nombre_empresa: String,
    correo_coporativo: String,
    actividad_economica: String,
    direccion: String,
    nit: Number
})

const Ruta = mongoose.model('tbc_registro_empresas',rutaSchema);
module.exports = Ruta;