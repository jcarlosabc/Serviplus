var mongoose = require('mongoose')
var schema = mongoose.Schema;

var rutaSchema = schema({
    titulo_del_caso: String,
    codigo_de_caso: Number,
    descripcion_del_caso: String,
    evidencia_del_caso:String,
    fecha_creacion_del_caso:String,
    estado_del_caso: String,
    fecha_finalizacion_del_caso: String,
    codigo_ing_especialista: String
})

const Ruta = mongoose.model('tbc_casos',rutaSchema);
module.exports = Ruta;