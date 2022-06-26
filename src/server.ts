import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Application } from 'express';
import routes from 'routes';

export const createServerInstance = (): Application => {
  const app: Application = express();

  app.use(bodyParser.json({ limit: '30mb' }));
  app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendStatus(200);
  });

  app.get('/health', (req, res) => {
    res.status(200).send({ running: true });
  });

  app.use(routes);

  return app;
};
