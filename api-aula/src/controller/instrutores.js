const { instrutores } = require("../bd");

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
  const { id, nome, email, status } = req.params;

  instrutores.push({
    id: id,
    nome: nome,
    email: email,
    status: status,
  });

  res.json(listarInstrutores());
};
module.exports = {
  listarInstrutores,
  encontraInstrutor,
  cadastraInstrutor,
};

console.log();
