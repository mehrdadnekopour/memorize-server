import mongoose from 'mongoose';
import chalk from 'chalk';
import { createServerInstance } from './server';
import dotenv from 'dotenv';

const PORT = Number(process.env.PORT) || 5454;

const app = createServerInstance();
dotenv.config();

const mgoConString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASS}@cluster0.kvzhuee.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mgoConString!)
  .then(() => {
    app.listen(PORT, () =>
      console.log(chalk.blue(`server running on port ${PORT}`))
    );
  })
  .catch((err) => console.error(chalk.red(chalk.bold(err))));
