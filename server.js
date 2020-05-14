const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB(MongoDB)
mongoose.connect("mongodb://localhost:27017/nodeapi");

//Registrando os Models na aplicação
requireDir("./src/models");

//Rotas
//use aceita todo tipo de requisição
app.use("/api", require("./src/routes"));

//Definindo a porta do navegador
app.listen(3001);
