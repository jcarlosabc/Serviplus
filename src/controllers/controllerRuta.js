const Ruta = require('../models/registro_empresas');

function generar_tickets(req, res) {
    let myRutas = new Ruta(req.body);
    myRutas.save((err, result) => {
        res.status(200).send({ message: result });
    })
}

function buscar(req, res) {
    let idRuta = req.params.id
    Ruta.findById(idRuta).exec((err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error desde el server' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'Error desde el server' });
            } else {
                res.status(200).send({ message: result });
            }
        }
    })
}

function listar_datos(req, res) {
    let idRuta = req.params.id
    let result
    if (!idRuta) {
        result = Ruta.find({}).sort('id')
    } else {
        result = Ruta.find({ _id: idRuta }).sort('id')
    }
    result.exec(function (err, result) {
        if (err) {
            res.status(500).send({ message: 'Error desde el server' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'Error desde el server' });
            } else {
                res.status(200).send({ message: result });
            }
        }
    })
}

function update_tickets(req, res) {
    let idRuta = req.params.id;
    Ruta.findOneAndUpdate({ _id: idRuta }, req.body, { new: true }, function (err, Ruta) {
        if (err) {
            res.send(err)
            res.json(Ruta)
        }
    })
}

function delete_tickets(req, res) {
    let idRuta = req.params.id;
    Ruta.findByIdAndDelete(idRuta,function(err,Ruta){
        if(err){
            return res.json(500,{
                message:'Problemas en el back'
            })
        }
        return res.json(Ruta)
    })

}
module.exports = {
    generar_tickets,
    buscar,
    listar_datos,
    update_tickets,
    delete_tickets
}