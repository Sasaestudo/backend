const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('Teste da API Produtos', function () {
    test('POST / retorna o status 201 e um conteúdo do tipo JSON', async function () {
        const novo = { nome: "uva", preco: 20.0 };
        const response = await request.post("/produtos").send(novo);
        expect(response.status).toBe(201); 
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("nome", novo.nome);
        expect(response.body).toHaveProperty("preco", novo.preco);
    });

    test('GET /produtos retorna o status 200 com um conteúdo do tipo JSON', async () => {
        const response = await request.get('/produtos');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /produtos/1 retorna o status 200 e um conteúdo do tipo JSON', async () => {
        const response = await request.get('/produtos/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', 1);
        expect(response.body).toHaveProperty('nome', 'uva');
        expect(response.body).toHaveProperty('preco', 20.00);
    });

    test('GET /produtos/100 retorna o status 404 e um conteúdo do tipo JSON', async () => {
        const response = await request.get('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    });

    test('POST /produtos sem um JSON e retorna o status 422 e um conteúdo do tipo JSON', async () => {
        const response = await request.post("/produtos");
        expect(response.status).toBe(422); 
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("msg", "Nome e/ou preço do produto não informados");
    });
       

    test('PUT /produtos/1 retorna o status 200 e um conteúdo do tipo JSON', async () => {
        const response = await request.put('/produtos/1').send({ nome: 'uva verde', preco: 18.00 });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', 1);
        expect(response.body).toHaveProperty('nome', 'uva verde');
        expect(response.body).toHaveProperty('preco', 18.00);
    });

    test('PUT /produtos/100 retorna o status 404 e um conteúdo do tipo JSON', async () => {
        const response = await request.put('/produtos/100').send({ nome: 'uva verde', preco: 18.00 });
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    });

    test('DELETE /produtos/1 retorna o status 204 e sem conteúdo', async () => {
        const response = await request.delete('/produtos/1');
        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    });

    test('DELETE /produtos/100 retorna o status 404 e um conteúdo do tipo JSON', async () => {
        const response = await request.delete('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    });
});
