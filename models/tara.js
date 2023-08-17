const mongoose = require("mongoose");

//Definindo um esquema
const taraSchema = new mongoose.Schema({
    LARG: String,
    METROS: String,
    PLASTICO: String,
    NUCLEO: String,
    TARA: String,
    ARTIGO: String,
});

//Criando um modelo com o esquema
const Tara = mongoose.model('Tara', taraSchema);

module.exports = Tara;
