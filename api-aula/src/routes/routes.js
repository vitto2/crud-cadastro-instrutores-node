const express = require("express");
const routes = express();
const {
  listarInstrutores,
  encontraInstrutor,
  cadastraInstrutor,
  atualizaInstrutor,
  atualizaCampoInstrutor,
  deletaInstrutor,
} = require("../controller/instrutores");

routes.get("/instrutores", listarInstrutores);
routes.get("/instrutores/:id", encontraInstrutor);
routes.post("/instrutores", cadastraInstrutor);
routes.put("/instrutores/:id", atualizaInstrutor);
routes.patch("/instrutor/:id", atualizaCampoInstrutor);
routes.delete("/instrutor/:id", deletaInstrutor);
module.exports = routes;
