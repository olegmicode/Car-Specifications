import * as express from 'express';
import { Request } from 'express';
import { validationResult, Schema, checkSchema } from 'express-validator';
import * as Errors from 'restify-errors';

import { FieldController } from '../controller/field.controller';
import { schemaValidation } from './common';

const router = express.Router();

const fieldSchema: Schema = {
  title: {
    isString: true,
  },
  options: {
    isArray: true,
    custom: {
      options: (value) => {
        return Array.isArray(value) && value.every((item) => typeof item?.title === 'string');
      },
    },
  },
};

router.get('/fields', async function (req, res, next) {
  res.json(await new FieldController().list());
});

router.post('/fields', ...schemaValidation(fieldSchema), async function (req, res, next) {
  console.log(req.body);
  try {
    res.json(await new FieldController().create(req.body));
  } catch (error) {
    next(error);
  }
});

export { router as fieldRouter };
