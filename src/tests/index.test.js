/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index');

describe('Vuttr API', () => {
  let token;

  it('Should create a user', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        name: 'Test',
        email: 'test@test.com',
        password: 'test',
      });

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should login with user', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@test.com',
        password: 'test',
      });

    token = response.body.token;

    expect(response.status).toEqual(200);
    expect(token);
  });

  it('Should show all users registered', async () => {
    const response = await request(app).get('/users')
      .set('Authorization', `${token}`);

    expect(response.status).toEqual(200);
  });

  it('Should create a new tool', async () => {
    const response = await request(app)
      .post('/tools')
      .set('Authorization', `${token}`)
      .send({
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        description: 'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
        tags: ['node', 'organizing', 'webapps', 'domain', 'developer', 'https', 'proxy'],
      });

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should show all tools registered', async () => {
    const response = await request(app).get('/tools')
      .set('Authorization', `${token}`);

    expect(response.status).toEqual(200);
  });

  it('Should show tool by tag', async () => {
    const response = await request(app).get('/tools?tag=node')
      .set('Authorization', `${token}`);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([{
      id: 1,
      title: 'hotel',
      link: 'https://github.com/typicode/hotel',
      description: 'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
      tags: ['node', 'organizing', 'webapps', 'domain', 'developer', 'https', 'proxy'],
    }]);
  });

  it('Should delete a tool', async () => {
    const response = await request(app)
      .del('/tools/1')
      .set('Authorization', `${token}`);

    expect(response.status).toEqual(204);
  });

  it('Should update a user', async () => {
    const response = await request(app)
      .put('/users/1')
      .set('Authorization', `${token}`)
      .send({
        email: 'max@max.com',
        password: 'max',
      });

    expect(response.status).toEqual(202);
  });

  it('Should delete a user', async () => {
    const response = await request(app)
      .del('/users/1')
      .set('Authorization', `${token}`);

    expect(response.status).toEqual(204);
  });
});
