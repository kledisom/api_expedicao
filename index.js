require("dotenv").config();

const express = require('express');
const port = process.env.PORT || 3390;
const app = express();
const cors = require('cors');
const connectDB = require('./database');
const Pessoa = require('./models/models');
const Pedido = require('./models/pedido');
const Rte = require('./models/rte');
const Tara = require('./models/tara');

connectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("funcionando");
})

//create expedição
app.post('/create/pedido', async (req, res) => {
    const count = await Pedido.count();
    const { nu_pedido, nm_cliente, model, len, codigo, tara, peso, met, linear, status } = req.body;
    const novoPedido = new Pedido({
        id: count,
        nu_pedido: nu_pedido,
        nm_cliente: nm_cliente,
        model: model,
        len: len,
        codigo: codigo,
        tara: tara,
        peso: peso,
        met: met,
        linear: linear,
        status: status
    });

    novoPedido.save()
        .then(pedido => {
            console.log("pessoa salva: ", pedido);
            res.json(pedido)
        })
});

//read expedição
app.get('/read/pedido/:name', async (req, res) => {
    const flag = req.params.name;

    if (flag == "true") {
        Pedido.find()
            .then(pedidos => res.json(pedidos))

    } else {
        Pedido.find({ nu_pedido: flag })
            .then(pedidos => res.json(pedidos))
    }
});

//read expedição RTE
app.get('/read/rte/:cod', async (req, res) => {
    const flag = req.params.cod;

    if (flag == "true") {
        Rte.find()
            .then(rte => res.json(rte))
    } else {
        Rte.find({ cod: flag })
            .then(rte => res.json(rte))
    };
});

//read expedição TARA
app.get('/read/tara/:cod', async (req, res) => {
    const flag = req.params.cod;

    if (flag == "true") {
        Tara.find()
            .then(tara => res.json(tara))
    } else {
        Tara.find({ cod: flag })
            .then(tara => res.json(tara))
    };
});

//delete expedição
app.delete('/delete/pedido/:id', (req, res) => {
    const idref = req.params.id

    Pedido.findOneAndDelete({ id: idref })
        .then(pedido => res.json(pedido))
});


















//create 
app.post('/create', async (req, res) => {
    const count = await Pessoa.count();

    const novaPessoa = new Pessoa({
        id: count,
        nome: "testiss",
        idade: 45,
        email: "joaogaiola@gmail.com"
    });

    novaPessoa.save()
        .then(pessoa => {
            console.log("pessoa salva: ", pessoa);
            res.json(pessoa)
        })
})

//read
app.get('/read/:name', async (req, res) => {
    const flag = req.params.name;

    if (flag == "true") {
        Pessoa.find()
            .then(pessoas => res.json(pessoas))

    } else {
        Pessoa.find({ nome: "testiss" })
            .then(pessoas => res.json(pessoas))
    }
});

//update
app.put('/update', (req, res) => {
    Pessoa.findOneAndUpdate({ nome: "testiss" }, { idade: 50 })
        .then(pessoa => res.json(pessoa))
});

//delete
app.delete('/delete', (req, res) => {
    Pessoa.findOneAndDelete({ nome: "testin" })
        .then(pessoa => res.json(pessoa))
});



app.listen(port, () => {
    console.log(` ⌛ ouvindo na porta ${port}`);
});
