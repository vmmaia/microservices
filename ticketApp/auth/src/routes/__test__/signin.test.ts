import request from 'supertest';
import { app } from '../../app';

it('Fails when a non-existent emails is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'vasco.maia@ua.pt',
      password: 'password'
    })
    .expect(400);
});

it('Fails when a incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'vasco.maia@ua.pt',
      password: 'password'
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'vasco.maia@ua.pt',
      password: 'incorrectpassword'
    })
    .expect(400);
});

it('Responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'vasco.maia@ua.pt',
      password: 'password'
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'vasco.maia@ua.pt',
      password: 'password'
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
