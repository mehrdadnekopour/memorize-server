import request from 'supertest';
import { createServerInstance } from '../server';

const app = createServerInstance();

describe('check server runs', () => {
  it('is created without error', (done) => {
    request(app).get('/').expect(200, done);
  });

  it('is healthy and running', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toEqual(200);
    expect(res.body.running).toEqual(true);
  });
});
