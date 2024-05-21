const request = require('supertest');
const app = require('./index');

const api = request(app);

test('GET / retorna status 200', async () => {
  const response = await api.get('/');
  expect(response.status).toBe(200);
});

test('POST / retorna status 201', async () => {
  const response = await api.post('/');
  expect(response.status).toBe(201);
});

test('PUT / retorna status 200', async () => {
  const response = await api.put('/');
  expect(response.status).toBe(200);
});

test('DELETE / retorna status 204', async () => {
  const response = await api.delete('/');
  expect(response.status).toBe(204);
});