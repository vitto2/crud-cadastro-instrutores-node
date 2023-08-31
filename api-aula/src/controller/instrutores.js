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
    status: status ?? true
  };

  instrutores.push(instrutor);

  return res.status(201).json(instrutor);
};
module.exports = {
  listarInstrutores,
  encontraInstrutor,
  cadastraInstrutor,
};
