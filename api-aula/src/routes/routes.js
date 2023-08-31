const express = require("express");
const routes = express();
const {
  listarInstrutores,
  encontraInstrutor,
  cadastraInstrutor,
  atualizaInstrutor,
} = require("../controller/instrutores");

routes.get("/instrutores", listarInstrutores);
routes.get("/instrutores/:id", encontraInstrutor);
routes.post("/cadastra-instrutores", cadastraInstrutor);
routes.put("/atualiza-instrutor/:id", atualizaInstrutor);
module.exports = routes;
