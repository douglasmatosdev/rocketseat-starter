const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Primeira rota
app.get("/", (req, res) => {
  res.send("Hello Douglas");
});

app.listen(3001);