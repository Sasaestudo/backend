const produtos = [];

const listarTodos = (req, res) => res.json(produtos);

const buscarPeloId = (req, res) => {
  const { produtoId } = req.params;
  const produto = produtos.find(({ id }) => id === parseInt(produtoId));
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ msg: "Produto não encontrado" });
  }
};

const criar = (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || !preco) {
    return res.status(422).json({ msg: "Nome e/ou preço do produto não informados" });
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
};

const atualizar = (req, res) => {
  const { produtoId } = req.params;
  const { nome, preco } = req.body;
  const produto = produtos.find(({ id }) => id === parseInt(produtoId));
  if (!produto) {
    return res.status(404).json({ msg: "Produto não encontrado" });
  }

  produto.nome = nome;
  produto.preco = preco;
  res.json(produto);
};

const remover = (req, res) => {
  const { produtoId } = req.params;
  const index = produtos.findIndex(({ id }) => id === parseInt(produtoId));
  if (index === -1) {
    return res.status(404).json({ msg: "Produto não encontrado" });
  }

  produtos.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  listarTodos,
  buscarPeloId,
  criar,
  atualizar,
  remover
};
