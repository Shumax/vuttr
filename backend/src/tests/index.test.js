/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index');

describe('Vuttr API', () => {
  it('should show all tools registered', async () => {
    const response = await request(app).get('/tools');
    expect(response.status).toEqual(200);
  });

  it('should create a new tool', async () => {
    const res = await request(app)
      .post('/tools')
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        description: 'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
        tags: ['node', 'organizing', 'webapps', 'domain', 'developer', 'https', 'proxy'],
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should delete a tool', async () => {
    const res = await request(app)
      .del('/tools/1');
    expect(res.statusCode).toEqual(204);
  });
});
