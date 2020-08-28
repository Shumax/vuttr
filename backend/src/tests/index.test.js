/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index');

describe('Vuttr API', () => {
  it('should show all tools registered', async () => {
    const response = await request(app).get('/tools');
    expect(response.statusCode).toEqual(200);
  });
});
