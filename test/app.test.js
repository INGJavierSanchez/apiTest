// __tests__/app.test.js
const request = require('supertest');
const { server } = require('../src/index');  // Importar el servidor

describe('API Tests', () => {
  afterAll(async () => {
    await server.close();  // Cerrar el servidor después de las pruebas
  });

  it('should return status 200 for /resumen/:fecha_inicio', async () => {
    const response = await request(server).get('/resumen/2019-12-01?dias=5');
    expect(response.status).toBe(200);
  });
});