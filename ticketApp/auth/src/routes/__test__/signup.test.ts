import request from 'supertest';
import { app } from '../../app';

it('Return a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'vasco.maia@ua.pt',
      password: 'password'
    })
    .expect(201);
});

it('Return a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'vasco.maia',
      password: 'password'
    })
    .expect(400);
});

it('Return a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'vasco.maia@ua.pt',
      password: '1'
    })
    .expect(400);
});

it('Return a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'vasco.maia@ua.pt' })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({ password: 'password' })
    .expect(400);
});

it('Disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'vasco.maia@ua.pt', password: 'password' })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({ email: 'vasco.maia@ua.pt', password: 'password' })
    .expect(400);
});

it('Sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ email: 'vasco.maia@ua.pt', password: 'password' })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
