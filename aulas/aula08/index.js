const { MongoClient, ObjectId } = require('mongodb');

//Acesso
const url = 'mongodb+srv://sasaestudo2018:back2024@aula08.lexywrj.mongodb.net/'

async function conectar() {
    try {
      const mongoClient = await MongoClient.connect(url);
      return mongoClient.db("loja");
    } catch (error) {
      console.log("Deu ruim!", error);
    }
  }
  
  async function inserir(produto) {
    const db = await conectar();
    return db.collection("produtos").insertOne(produto);
  }
  
  async function listar() {
    const db = await conectar();
    return db.collection("produtos").find({}).toArray();
  }
  
  async function atualizar(id, produtoAtualizado) {
    const db = await conectar();
    return db
      .collection("produtos")
      .updateOne({ _id: new ObjectId(id) }, { $set: produtoAtualizado });
  }
  
  async function remover(id) {
    const db = await conectar();
    return db.collection("produtos").deleteOne({ _id: new ObjectId(id) });
  }
  
  async function testar() {
    const result = await inserir({ nome: "laranja", preco: 7.0 });
    console.log("Produto inserido", result);
  
    const produtos = await listar();
    console.log("Listagem de produtos", produtos);
  
    const atual = await atualizar("66514ecc2b451d138f3824ff", {
      nome: "uva niagara",
      preco: 13.0,
    });
    console.log("Produto atualizado", atual);
  
    const removido = await remover("66514ea01a07089bdeac02e8");
    console.log('Produto removido', removido);

}

testar();