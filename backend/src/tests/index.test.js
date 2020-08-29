/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index');

describe('Vuttr API', () => {
  it('Should show all tools registered', async () => {
    const response = await request(app).get('/tools');
    expect(response.status).toEqual(200);
  });

  it('Should show tool by tag', async () => {
    const response = await request(app).get('/tools?tag=node');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it('Should create a new tool', async () => {
    const response = await request(app)
      .post('/tools')
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        description: 'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
        tags: ['node', 'organizing', 'webapps', 'domain', 'developer', 'https', 'proxy'],
      });
    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should delete a tool', async () => {
    const response = await request(app)
      .del('/tools/1');
    expect(response.status).toEqual(204);
  });
});
