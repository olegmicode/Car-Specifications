import { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { dataSource } from './data-source';
import { router } from './routes';
import {} from 'restify-errors';

(async () => {
  try {
    await dataSource.initialize();

    // create express app
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(router);

    app.listen(5000, () => {
      console.log('Express server has started on port 5000.');
    });
  } catch (error) {
    console.log(error);
  }
})();
