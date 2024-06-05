const supertest = require("supertest");

const app = require('../app');

const request = supertest(app);

let id = null;

describe('API Produtos', () => {
  test('POST / deve retornar 201 e um JSON', async () => {
    const response = await request.post('/produtos').send({ nome: 'uva', preco: 20.0 });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.0);
    expect(response.type).toBe('application/json');
    id = response.body._id.toString();    
  });

  test('POST / deve retornar 422 e um JSON', async () => {
    const response = await request.post('/produtos').send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty('msg', 'Dados do produto inválidos');
  });

  test('GET / deve retornar 200 e um JSON', async () => {
    const response = await request.get('/produtos');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json"); 
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /produtos/:id deve retornar 200 e um JSON', async () => {
    const response = await request.get(`/produtos/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json"); 
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.0);
  });

  test('GET /produtos/000000000000000000000001 deve retornar 404 e um JSON', async () => {
    const response = await request.get('/produtos/000000000000000000000001');
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
  });

  test('PUT /produtos/:id deve retornar 200 e um JSON', async () => {
    const response = await request.put(`/produtos/${id}`).send({ nome: 'uva globo', preco: 25.0 });
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    // expect(response.body).toHaveProperty('nome', 'uva globo');
    // expect(response.body).toHaveProperty('preco', 25.0);
  });

  test('PUT /produtos/:id deve retornar 422 e um JSON', async () => {
    const response = await request.put(`/produtos/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty('msg', 'Dados do produto inválidos');
  });

  test('PUT /produtos/000000000000000000000001 deve retornar 404 e um JSON', async () => {
    const response = await request.put('/produtos/000000000000000000000001');
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
  });

  test('DELETE /produtos/:id deve retornar 204 sem conteúdo', async () => {
    const response = await request.delete(`/produtos/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
  });

  test('DELETE /produtos/000000000000000000000001 deve retornar 404 e um JSON', async () => {
    const response = await request.delete('/produtos/000000000000000000000001');
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
  });
});
