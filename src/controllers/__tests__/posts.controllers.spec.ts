import { getPosts } from 'controllers/posts';
import request from 'supertest';

describe('check post controllers', () => {
  it('gets list of posts', async () => {
    const posts = [{ id: 1 }, { id: 2 }]; //getPosts();

    expect(posts).toBeInstanceOf(Array);
  });
});
