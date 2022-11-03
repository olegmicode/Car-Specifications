import { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { dataSource } from './data-source';
import { router } from './routes';
import {} from 'restify-errors';

(async () => {
  try {
    await dataSource.initialize();

    // create express app
    const app = express();

    app.use(bodyParser.json());
    app.use(router);

    app.listen(3000, () => {
      console.log('Express server has started on port 3000.');
    });
  } catch (error) {
    console.log(error);
  }
})();
