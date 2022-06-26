import { createServerInstance } from '../../server';
import request from 'supertest';

const app = createServerInstance();
const baseURL = '/posts';

describe('check posts routes', () => {
  it('returns list of posts', async () => {
    const resp = await request(app).get(baseURL);

    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toBeInstanceOf(Array);
  });

  it('returns a post with defined id', async () => {
    const postId = 2;
    const resp = await request(app).get(`${baseURL}/${postId}`);

    expect(resp.statusCode).toEqual(200);
    expect(resp.body.id).toEqual(postId);
  });
});
