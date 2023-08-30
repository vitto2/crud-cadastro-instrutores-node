const express = require("express");
const routes = express();
const {
  listarInstrutores,
  encontraInstrutor,
  cadastraInstrutor,
} = require("../controller/instrutores");

routes.get("/instrutores", listarInstrutores);
routes.get("/instrutores/:id", encontraInstrutor);
routes.post("/cadastra-instrutores", cadastraInstrutor);
module.exports = routes;
