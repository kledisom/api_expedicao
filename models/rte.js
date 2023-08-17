const mongoose = require("mongoose");

//Definindo um esquema
const rteSchema = new mongoose.Schema({
    cod: String,
    largura: String,
    desc: String,
    modelo: String,
    linear: String,
    m2: String,
    oz: String
});

//Criando um modelo com o esquema
const Rte = mongoose.model('Rte', rteSchema);

module.exports = Rte;

