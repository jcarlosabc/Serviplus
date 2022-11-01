const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db_serviplus_u30_g2", {
    useNewUrlParser: true,

}, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("===> 😎 BASE DE DATOS CONECTADA");
        console.log("***********************************************************")
    }
});
module.exports = mongoose
