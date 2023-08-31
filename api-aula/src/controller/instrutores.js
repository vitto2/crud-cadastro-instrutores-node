const { instrutores } = require("../bd");

let { identificadorInstrutor } = require("../bd");

const listarInstrutores = (req, res) => {
  return res.json(instrutores);
};

const encontraInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find((instrutor) => instrutor.id == id);

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }
  res.json(instrutor);
};

const cadastraInstrutor = (req, res) => {
  const { nome, email, status } = req.body;

  if (!nome) {
    return res
      .status(400)
      .json({ mensagem: "O campo nome precisa ser preenchido." });
  }

  if (!email) {
    return res
      .status(400)
      .json({ mensagem: "O campo e-mail precisa ser preenchido." });
  }

  const instrutor = {
    id: identificadorInstrutor++,
    nome,
    email,
    status: status ?? true,
  };

  instrutores.push(instrutor);

  return res.status(201).json(instrutor);
};

const atualizaInstrutor = (req, res) => {
  const { nome, email, status } = req.body;
  const { id } = req.params;

  if (!nome) {
    return res
      .status(400)
      .json({ mensagem: "O campo nome precisa ser preenchido." });
  }

  if (!email) {
    return res
      .status(400)
      .json({ mensagem: "O campo e-mail precisa ser preenchido." });
  }

  if (status == undefined) {
    return res
      .status(400)
      .json({ mensagem: "O campo status precisa ser preenchido." });
  }
  const instrutor = instrutores.find((instrutor) => instrutor.id == id);

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  res.status(204).json({ mensagem: "Alteração feita com sucesso!" });
};

const atualizaCampoInstrutor = (req, res) => {
  const { nome, email, status } = req.body;
  const { id } = req.params;

  const instrutor = instrutores.find((instrutor) => instrutor.id == id);

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }

  if (nome) {
    instrutor.nome = nome;
  }

  if (email) {
    instrutor.email = email;
  }

  if (status != undefined) {
    instrutor.status = status;
  }

  res.status(204).send("Campo(s) atualizado(s) com sucesso.");
};

const deletaInstrutor = (req, res) => {
  const { id } = req.params;

  const indiceToRemove = instrutores.find((instrutor) => instrutor.id == id);

  if (!indiceToRemove) {
    return res.status(404).json({ mensagem: "instrutor não encontrado!" });
  }

  instrutores.splice(indiceToRemove, 1);
  return res.status(204).send("Deletado");
};
module.exports = {
  listarInstrutores,
  encontraInstrutor,
  cadastraInstrutor,
  atualizaInstrutor,
  atualizaCampoInstrutor,
  deletaInstrutor,
};
