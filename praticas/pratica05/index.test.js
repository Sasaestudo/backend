const request = require('supertest');
const app = require('./index');

describe('Produtos API', () => {
  beforeAll(async () => {
    // Limpar os produtos antes de começar os testes
    await request(app).delete('/produtos');
  });

  it('GET /produtos deve retornar status 200 e JSON', async () => {
    const res = await request(app).get('/produtos');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /produtos/1 deve retornar status 200 e JSON', async () => {
    // Primeiro, criar o produto com id 1
    await request(app).post('/produtos').send({ nome: 'produto1', preco: 10.00 });
    const res = await request(app).get('/produtos/1');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('nome', 'produto1');
    expect(res.body).toHaveProperty('preco', 10.00);
  });

  it('GET /produtos/100 deve retornar status 404 e JSON', async () => {
    const res = await request(app).get('/produtos/100');
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('msg', 'Produto não encontrado');
  });

  it('POST /produtos deve retornar status 201 e JSON', async () => {
    const res = await request(app).post('/produtos').send({ nome: 'uva', preco: 20.00 });
    expect(res.status).toBe(201);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('nome', 'uva');
    expect(res.body).toHaveProperty('preco', 20.00);
  });

  it('POST /produtos sem JSON deve retornar status 422 e JSON', async () => {
    const res = await request(app).post('/produtos').send({});
    expect(res.status).toBe(422);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('msg', 'Nome e/ou preço do produto não informados');
  });

  it('PUT /produtos/1 deve retornar status 200 e JSON', async () => {
    // Primeiro, criar o produto com id 1 se não existir
    await request(app).post('/produtos').send({ nome: 'produto1', preco: 10.00 });
    const res = await request(app).put('/produtos/1').send({ nome: 'uva verde', preco: 18.00 });
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('nome', 'uva verde');
    expect(res.body).toHaveProperty('preco', 18.00);
  });

  it('PUT /produtos/100 deve retornar status 404 e JSON', async () => {
    const res = await request(app).put('/produtos/100').send({ nome: 'uva verde', preco: 18.00 });
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('msg', 'Produto não encontrado');
  });

  it('DELETE /produtos/1 deve retornar status 204 sem conteúdo', async () => {
    // Primeiro, criar o produto com id 1 se não existir
    await request(app).post('/produtos').send({ nome: 'produto1', preco: 10.00 });
    const res = await request(app).delete('/produtos/1');
    expect(res.status).toBe(204);
    expect(res.text).toBe('');
  });

  it('DELETE /produtos/100 deve retornar status 404 e JSON', async () => {
    const res = await request(app).delete('/produtos/100');
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('msg', 'Produto não encontrado');
  });
});