const mongoose = require("mongoose");

//Definindo um esquema
const pedidoSchema = new mongoose.Schema({
    id: Number,
    nu_pedido: Number,
    nm_cliente: String,
    model: String,
    len: Number,
    codigo: String,
    tara: String,
    peso: Number,
    met: Number,
    linear: Number,
    status: String
});

//Criando um modelo com o esquema
const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;