const mongoose = require("mongoose");

//Definindo um esquema
const pessoaSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    idade: Number,
    email: String
});

//Criando um modelo com o esquema
const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;