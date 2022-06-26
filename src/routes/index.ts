import { Router } from 'express';
import posts from './posts';

const routes = Router();

routes.use('/posts', posts);

export default routes;
